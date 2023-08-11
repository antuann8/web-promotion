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


const LetterTemplatesScreen = () => {
    const [htmlContent, setHtmlContent] = useState('');

    const history = useHistory();
    const location = useLocation();

    const templateName = location.state.name;

    useEffect(() => {
        // Загружаем HTML-код документа по ссылке
        axios.get(`https://s3.super-appz.ru/download/postman/templates/${templateName}.html`)
            .then(response => {
                const modifiedHtml = response.data.replace(/<%=\s*(.*?)\s*%>/g, (match, captureGroup) => {
                    return `{${captureGroup}}`;
                });
                setHtmlContent(modifiedHtml);
            })
            .catch(error => {
                console.error('Ошибка при загрузке HTML:', error);
            });
    }, []);

    const handleGoBack = (event) => {
        event.preventDefault();
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
                    Скольким пользователям вы хотите отправить письмо?
                </div>
                <div className='letter__template__html'>
                    {ReactHtmlParser(htmlContent)}
                </div>
            </div>
        </Template>
    )
}

export default LetterTemplatesScreen;