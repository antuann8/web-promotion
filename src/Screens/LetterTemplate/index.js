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
import SelectBlock from "../SelectBlock";
import {usersCountEnum} from "../../Globals/Constants";


const LetterTemplatesScreen = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [templateParams, setTemplateParams] = useState([]);

    const history = useHistory();
    const location = useLocation();

    const templateName = location.state.name;

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

    const handleSendCorrectEmail = () => {
        // const isIncorrect = isCorrectEmail.includes(false);
        // if (isIncorrect) {
        //     alert('Ошибка! Проверьте корректность введеного(-ых) email');
        // } else {
        //     alert('Письмо(-а) успешно отправлено(-ы)');
        //
        //     const data = [];
        //
        //     for (let i = 0; i < usersCount; i++) {
        //         const email = emailValue[i]; // Получение соответствующего email из массива emailValue
        //         const userObject = arrTemplateParams[i]; // Получение объекта пользователя из массива arrTemplateParams
        //
        //         const extractedData = {}; // Создаем пустой объект, в который будем извлекать данные
        //
        //         for (const property of templateParams) {
        //             extractedData[property] = userObject[property]; // Извлекаем данные по имени свойства
        //         }
        //
        //         data.push({ email, ...extractedData }); // Добавляем извлеченные данные в массив data
        //     }
        //
        //     const post = async () => {
        //         await postLetterToEmail(data);
        //     }
        //     post();
        // }
        alert('Отправлено');
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
                    <h1>Conditions</h1>
                </div>
                <div className='letter__template__html'>
                    {ReactHtmlParser(htmlContent)}
                </div>
                <div className='letter__redactor__save-button__container'>
                    <button
                            onClick={handleSendCorrectEmail}
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