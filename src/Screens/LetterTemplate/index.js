import React, {useContext, useEffect, useState} from 'react';
import Template from "../../Components/Template";
import {useHistory, useLocation} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";

// libraries
import axios, {options} from 'axios';
import ReactHtmlParser from 'react-html-parser';

// data
import {changeMailingConditionStatus, getMailingConditions} from "../../Models/Mailing";

// styles
import './styles.css';


const LetterTemplatesScreen = () => {

    const [htmlContent, setHtmlContent] = useState('');
    const [templateParams, setTemplateParams] = useState([]);
    // const [exampleUsers, setExampleUsers] = useState([]);
    const { control, handleSubmit, watch, setValue } = useForm();
    const selectedCondition = watch('condition');
    const [currentDate, setCurrentDate] = useState();
    const [statusValues, setStatusValues] = useState({});
    const [mailingConditions, setMailingConditions] = useState([]);
    const [filteredCondition, setFilteredCondition] = useState({});


    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0'); // Форматируем день (добавляем ведущий ноль, если день < 10)
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Форматируем месяц (январь - 0, декабрь - 11, поэтому прибавляем 1)

        setCurrentDate(`${day}.${month}`);
    }, []);

    const onSubmit = async (data) => {
        const {status, condition} = data;
        const id = filteredCondition._id;
        await changeMailingConditionStatus(id, status);
        console.log(`Статус: ${status}, Условие: ${condition}`)

        if (status === undefined) {
            alert('Выберите статус шаблона')
        }

        if (condition === '') {
            alert('Выберите условие для рассылки')
        }

        alert('Сохранено')
    };

    const handleConditionChange = (selectedOption) => {
        setValue('condition', selectedOption);
        // Сбросить значение статуса при изменении опции в основном select-е
        setValue('status', '');
        // Создать или обновить значение статуса для выбранной опции
        setStatusValues((prevStatusValues) => ({
            ...prevStatusValues,
            [selectedOption]: prevStatusValues[selectedOption] || '',
        }));
    };

    const history = useHistory();
    const location = useLocation();

    const templateName = location.state.name;

    useEffect(() => {
        const get = async () => {
            const mailingConditions = await getMailingConditions();
            setMailingConditions(mailingConditions);
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

    // useEffect(() => {
    //     console.log(exampleUsers);
    // },[exampleUsers]);


    useEffect(() => {
        const foundCondition = mailingConditions.find((item) => item.code === selectedCondition);
        setFilteredCondition(foundCondition);
        console.log(foundCondition);
    }, [selectedCondition, mailingConditions]);

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
                                defaultValue=""
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        className='letter__template__form-container__select'
                                        onChange={(e) => handleConditionChange(e.target.value)}
                                    >
                                        <option value="" disabled> </option>
                                        {
                                            mailingConditions.map((item, index) => (
                                                <option value={item.code} key={index}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                )}
                            />
                        </label>
                        {/*{selectedCondition && (*/}
                        <label htmlFor="status" className='letter__template__form-container__name'>
                            Выберите статус шаблона
                            <Controller
                                name="status"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        className="letter__template__form-container__select"
                                    >
                                        <option value=""></option>

                                        <option value="true">Активен</option>
                                        <option value="false" selected={filteredCondition?.status === "false"}>Не активен</option>
                                    </select>
                                )}
                            />
                        </label>
                        {/*)}*/}
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