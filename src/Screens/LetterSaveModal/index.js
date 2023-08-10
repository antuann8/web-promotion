import React, {useContext, useState} from 'react';

// styles, photos
import {Context} from "../../Components/Provider";
import {handleChange} from "../../Components/ParamsUtils";
import {handleSaveClick} from "../../Components/SaveUtils";


const LetterSaveModal = () => {

    const {
        setShowSaveModal,
        setTemplateName,
        templateName,
        setTemplates,
        setSelectedOptions,
        setSelectedFontFamily,
        setSelectedFontSize,
        setSelectedColor,
        setSelectedWidth,
        setSelectedHeight,
        setSelectedText,
        setCalledFunctions,
        setSelectedArrow,
        setSelectedImage,
        setTitle,
        setEmptyLetter,
        arrTemplateNames,
        setArrTemplateNames,
    } = useContext(Context);

    const handleChange = (e) => {
        setTemplateName(e.target.value);
    }

    return (
        <div className='letter__redactor__save__modal'>
            <h1 className='education__header-save'>Введите название для вашего шаблона</h1>
            <div className='center'>
                {/*<div className="letter__redactor__description">Введите текст блока</div>*/}
                <input
                    placeholder='Введите название...'
                    className="letter__redactor__description-save-button-input-modal"
                    type="text"
                    onChange={(e) => {handleChange(e)}}
                />
            </div>
            <button onClick={() => {handleSaveClick(
                setTemplates,
                setEmptyLetter,
                setSelectedOptions,
                setSelectedFontFamily,
                setSelectedFontSize,
                setSelectedColor,
                setSelectedWidth,
                setSelectedHeight,
                setSelectedText,
                setCalledFunctions,
                setSelectedArrow,
                setSelectedImage,
                setTitle,
                templateName,
                setArrTemplateNames,
                setTemplateName,
                setShowSaveModal,
                arrTemplateNames,
                )}}
                    className='letter__redactor__button-left-save-modal left'
                    type="submit">
                Сохранить шаблон
            </button>
            {/*// Добавь вверх функци сохранения клика, передай templateName также создай массив для templateName, отдельную переменную,*/}
            {/*которую также буду передавать , то есть в функцию передаю arr , Затем в функции делаю setArr()Такую хуйню, и так будут сох*/}
            {/*ранять все имена.*/}
            <button className="letter__redactor__button-left-save-modal education__closed-button" onClick={() => setShowSaveModal(false)}>
                Вернуться назад
            </button>
        </div>
    );
};

export default LetterSaveModal;
