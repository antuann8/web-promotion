import React, {useContext, useEffect, useState} from 'react';
import Template from "../../Components/Template";
import {useHistory, useLocation} from "react-router-dom";

//libraries
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

// styles
import './styles.css';
import Loader from "../../Components/Loader";
import {Context} from "../../Components/Provider";
import InputBlock from "../InputBlock";
import {handleChange} from "../../Components/ParamsUtils";
import InputBlockEmail from "../InputBlockEmail";
import EmailError from "../InputBlockEmail/EmailError";
import InputBlockTextEmail from "../InputBlockTextEmail";
import {postLetterToEmail} from "../../Models/Templates";


const LetterTemplatesScreen = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [usersCount, setUsersCount] = useState(1);
    const [arrCount, setArrCount] = useState([]);
    const [emailValue, setEmailValue] = useState([]);
    const [isCorrectEmail, setIsCorrectEmail] = useState([]);
    const [templateParams, setTemplateParams] = useState([]);
    const [arrTemplateParams, setArrTemplateParams] = useState([]);

    const history = useHistory();
    const location = useLocation();

    const templateName = location.state.name;

    useEffect(() => {
        setArrCount(Array.from({ length: usersCount }));
    }, [usersCount]);

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

    const handleChange = (e, param) => {
        param(e.target.value);
    }


    const handleEmailChange = (e, index) => {

        const value = e.target.value;
        const newEmailValue = [...emailValue];
        newEmailValue[index] = value;
        setEmailValue(newEmailValue);

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const isValid = emailPattern.test(value);

        const newIsCorrectEmail = [...isCorrectEmail];
        newIsCorrectEmail[index] = isValid;
        setIsCorrectEmail(newIsCorrectEmail);

        const newEmailStates = [...emailValue];
        newEmailStates[index] = value;

        setEmailValue(newEmailStates);
    }

    const handleCorrectEmail = () => {
        const isIncorrect = isCorrectEmail.includes(false);
        if (isIncorrect) {
            alert('Ошибка! Проверьте корректность введеного(-ых) email');
        } else {
            alert('Письмо(-а) успешно отправлено(-ы)');

            // const data = [];
            //
            // for (let i = 0; i < usersCount; i++) {
            //     const email = emailValue[i]; // Получение соответствующего email из массива emailValue
            //     const params = templateParams[i];
            //     data.push({ email, ...params });
            // }
            //
            // const post = async () => {
            //     await postLetterToEmail(data);
            // }
            // post();
        }
    }

    const handleTemplateParamsChange = (e, innerIndex) => {
        const value = e.target.value;

        const newTemplateParams = [...templateParams];
        newTemplateParams[innerIndex] = value;
        setTemplateParams(newTemplateParams);
    }

    useEffect(() => {
        console.log(templateParams);
    }, [templateParams]);

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
                    <InputBlock
                        label="Введите количество пользователей для рассылки: (min: 1 , max: 100)"
                        selectedValue={usersCount}
                        onChange={(e) => {
                            handleChange(e, setUsersCount);
                            setEmailValue(Array(usersCount).fill(''));
                            setIsCorrectEmail(Array(usersCount).fill(true));
                            setArrTemplateParams(Array(usersCount).fill(''));
                        }}
                        min={1}
                        max={100}
                    />
                    {usersCount > 0 &&
                        arrCount.map((_, index) => (
                            <div key={index}>
                                <p style={{marginLeft: '150px', fontSize: '20px', fontWeight: 'bolder'}}>{index + 1} получатель</p>
                                <InputBlockEmail
                                    label="Введите email получателя"
                                    onChange={(e) => { handleEmailChange(e, index) }}
                                    selectedValue={emailValue[index]}
                                />
                                {!isCorrectEmail[index] && <EmailError/>}
                                <div key={index}>
                                    {templateParams.length !== 0 &&
                                        templateParams.map((_, i) => (
                                            <div key={`${index}-${i}`}>
                                                <InputBlockTextEmail
                                                    selectedValue={templateParams[i]}
                                                    onChange={(e) => { handleTemplateParamsChange(e, i) }}
                                                    item={templateParams[i]}
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
                <div className='letter__template__html'>
                    {ReactHtmlParser(htmlContent)}
                </div>
                <div className='letter__redactor__save-button__container'>
                    <button
                            onClick={handleCorrectEmail}
                            className='letter__redactor__save-button'
                            type="submit">
                        Отправить
                    </button>
                </div>
            </div>
        </Template>
    )
}

export default LetterTemplatesScreen;