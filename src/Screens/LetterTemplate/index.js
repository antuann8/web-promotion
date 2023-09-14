import React, {useContext, useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import Template from "../../Components/Template";
import {useHistory, useLocation} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";

// libraries
import axios, {options} from 'axios';
import ReactHtmlParser from 'react-html-parser';

// data
import {changeMailingConditionStatus, getMailingConditions} from "../../Models/Mailing";
import {getTemplateNames, updateTemplateName} from "./../../Models/Templates"

// models
import {updateCron} from "../../Models/Cron";

// styles
import './styles.css';
import Loader from "../../Components/Loader";


const LetterTemplatesScreen = () => {

    const [htmlContent, setHtmlContent] = useState('');
    const [templateParams, setTemplateParams] = useState([]);
    const { control, handleSubmit, watch, setValue, formState : {errors} } = useForm();
    const selectedCondition = watch('condition');
    const [currentTemplateData, setCurrentTemplateData] = useState([]);
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const { data: templateData } = useQuery('templateNames', getTemplateNames);
    const { data: mailingConditionsData} = useQuery('mailingConditions', getMailingConditions);
    const [dataLoaded, setDataLoaded] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const [index, setIndex] = useState();

    const templateId = location.state.id;
    const templateName = location.state.name;

    const onSubmit = async (data) => {
        const {status, condition} = data;

        const updateTemplateData = {status, index};
        const updateCronData = {condition, index};

        await updateTemplateName(templateId, updateTemplateData);
        // Нужен запрос к бд templateNames для изменения данных

        await updateCron(templateId, updateCronData);
        await alert('Сохранено')
    };

    const handleConditionChange = (selectedOption) => {
        setValue('condition', selectedOption);
    };


    // status effect
    useEffect(() => {
        if (currentTemplateData && selectedCondition) {
            const matchingItem = currentTemplateData.find(item => item.code === selectedCondition);

            if (matchingItem) {
                const matchCondition = matchingItem._id;
                const oneTemplateData = templateData.find(item => item._id === templateId);

                if (oneTemplateData) {
                    const statusIndex = oneTemplateData.conditionId.findIndex(item => item === matchCondition);
                    setIndex(statusIndex);
                    if (statusIndex !== -1) {
                        const newStatusValue = oneTemplateData.status[statusIndex];
                        setValue('status', newStatusValue);
                    }
                }
            }
        }
    }, [currentTemplateData, selectedCondition]);

    useEffect(() => {
        // Загружаем HTML-код документа по ссылке
        axios.get(`https://s3.super-appz.ru/download/postman/templates/${templateName}.html`)
            .then(response => {
                const modifiedHtml = response.data.replace(/<%=\s*(.*?)\s*%>/g, (match, captureGroup) => {
                    if (!templateParams.includes(captureGroup)) {
                        setTemplateParams((prev) => [...prev, captureGroup]);
                    }
                    return `{${captureGroup}}`;
                });
                setHtmlContent(modifiedHtml);
            })
            .catch(error => {
                console.error('Ошибка при загрузке HTML:', error);
            });
    }, []);

    const handleGoBack = (e) => {
        e.preventDefault();
        history.push('/letter-templates');
    }

    // condition effect
    useEffect(() => {
        if (templateData && mailingConditionsData) {
            const oneTemplateData = templateData.find(item => item._id === templateId);
            const mailingConditionsId = mailingConditionsData.map(item => item._id);
            const matchingItems = [];

            for (let i = 0; i < oneTemplateData.conditionId.length; i++) {
                for (let j = 0; j < mailingConditionsId.length; j++) {
                    if (oneTemplateData.conditionId[i] === mailingConditionsId[j]) {
                        matchingItems.push(oneTemplateData.conditionId[i]);
                    }
                }
            }

            const matchingArr = mailingConditionsData.filter(item => matchingItems.includes(item._id));

            setCurrentTemplateData(matchingArr);
            setDataLoaded(true);
        }
    }, [templateData, mailingConditionsData]);

    return (
        <Template>
            <div className='letter__template__container__head'>
                <div className='head__edit'>
                    <button onClick={ (e) => handleGoBack(e)} className='back-button'></button>
                    <h4 className='letter__template__header left'>Рассылка письма</h4>
                </div>
            </div>
            <div className='letter__template__container'>
                <div className='letter__template__description'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {dataLoaded ? (
                            <div>
                                <label>
                                    <label htmlFor="condition" className='letter__template__form-container__name'>Выберите
                                        условие для рассылки</label>
                                    <Controller
                                        name="condition"
                                        control={control}
                                        rules={{
                                            required: 'Выберите условие рассылки!'
                                        }}
                                        defaultValue=""
                                        render={({field, fieldState: {error}}) => (
                                            <div>
                                                <select
                                                    {...field}
                                                    className='letter__template__form-container__select'
                                                    onChange={(e) => {
                                                        handleConditionChange(e.target.value);
                                                        setIsOptionSelected(true);
                                                    }}
                                                >
                                                    <option value="" disabled></option>
                                                    {
                                                        currentTemplateData.length > 0 && currentTemplateData.map((item, index) => (
                                                            <option value={item.code} key={index}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                {error && !isOptionSelected &&
                                                    <div style={{color: 'red'}}>{error.message}</div>}
                                            </div>
                                        )}
                                    />
                                </label>
                                {selectedCondition && (
                                    <label>
                                        <label htmlFor="status" className='letter__template__form-container__name'>Выберите статус шаблона</label>
                                        <Controller
                                            name="status"
                                            rules={{
                                                required: 'Выберите статус шаблона!'
                                            }}
                                            control={control}
                                            render={({field, fieldState: {error}}) => (
                                                <div>
                                                    <select
                                                        {...field}
                                                        className="letter__template__form-container__select"
                                                    >
                                                        <option value=""></option>
                                                        <option value="true">Активен</option>
                                                        <option value="false">Не активен</option>
                                                    </select>
                                                    {error && <div style={{color: 'red'}}>{error.message}</div>}
                                                </div>
                                            )}
                                        />
                                    </label>
                                )}
                                <div className='letter__redactor__save-button__container'>
                                    <button
                                        className='letter__redactor__save-button'
                                        type="submit">
                                        Сохранить
                                    </button>
                                </div>
                            </div>) : <Loader/>
                        }
                    </form>
                </div>
                <div className='letter__template__html'>
                    {ReactHtmlParser(htmlContent)}
                </div>
            </div>
        </Template>
    )
}

export default LetterTemplatesScreen;