import React, {useContext, useEffect, useState} from 'react';
import Template from "../../Components/Template";
import {useHistory, useLocation} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";

// libraries
import axios, {options} from 'axios';
import ReactHtmlParser from 'react-html-parser';

// data
import {changeMailingConditionStatus, getMailingConditions} from "../../Models/Mailing";

// models
import {updateCron} from "../../Models/Cron";

// styles
import './styles.css';


const LetterTemplatesScreen = () => {

    const [htmlContent, setHtmlContent] = useState('');
    const [templateParams, setTemplateParams] = useState([]);
    // const [exampleUsers, setExampleUsers] = useState([]);
    const { control, handleSubmit, watch, setValue, formState : {errors} } = useForm();
    const selectedCondition = watch('condition');
    const [mailingConditions, setMailingConditions] = useState([]);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const onSubmit = async (data) => {
        const {status, condition} = data;
        await changeMailingConditionStatus(condition, status);

        await updateCron();
        await alert('Сохранено')
    };

    const handleConditionChange = (selectedOption) => {
        setValue('condition', selectedOption);

        mailingConditions.forEach((item) => {
            if (item.code === selectedOption) {
                setValue('status', item.status);
            }
        })

        // setValue('status', statusValue);
    };

    const history = useHistory();
    const location = useLocation();

    const templateName = location.state.name;

    useEffect(() => {
        const get = async () => {
            const mailingConditionsData = await getMailingConditions();
            setMailingConditions(mailingConditionsData);
        }
        get();
    }, [])

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

    // useEffect( () => {
    //     const getUsers = async () => {
    //         const res = await getExampleUsers();
    //         setExampleUsers(res);
    //     }
    //     getUsers();
    // },[])

    const handleGoBack = (e) => {
        e.preventDefault();
        history.push('/letter-templates');
    }

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
                        <label>
                            <label htmlFor="condition" className='letter__template__form-container__name'>Выберите условие для рассылки</label>
                            <Controller
                                name="condition"
                                control={control}
                                rules={{
                                    required: 'Выберите условие рассылки!'
                                }}
                                defaultValue=""
                                render={({ field, fieldState: {error} }) => (
                                    <div>
                                        <select
                                            {...field}
                                            className='letter__template__form-container__select'
                                            onChange={(e) => {
                                                handleConditionChange(e.target.value);
                                                setIsOptionSelected(true);
                                            }}
                                        >
                                            <option value="" disabled> </option>
                                            {
                                                mailingConditions.map((item, index) => (
                                                    <option value={item.code} key={index}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                        {error && !isOptionSelected && <div style={{color: 'red'}}>{error.message}</div>}
                                    </div>
                                )}
                            />
                        </label>
                        {selectedCondition && (
                        <label htmlFor="status" className='letter__template__form-container__name'>
                            Выберите статус шаблона
                            <Controller
                                name="status"
                                rules={{
                                    required: 'Выберите статус шаблона!'
                                }}
                                control={control}
                                render={({ field, fieldState: {error} }) => (
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