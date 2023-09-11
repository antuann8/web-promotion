import React, {useContext, useState} from 'react';

// styles, photos
import {Context} from "../../Components/Provider";
import {handleChange} from "../../Components/ParamsUtils";
import {handleSaveClick} from "../../Components/SaveUtils";
import LetterSaveModal from "../LetterSaveModal";


const LetterConditionModal = () => {

    // const {
    //     setShowSaveModal,
    //     setTemplateName,
    //     templateName,
    //     setTemplates,
    //     setSelectedOptions,
    //     setSelectedFontFamily,
    //     setSelectedFontSize,
    //     setSelectedColor,
    //     setSelectedWidth,
    //     setSelectedHeight,
    //     setSelectedText,
    //     setCalledFunctions,
    //     setSelectedArrow,
    //     setSelectedImage,
    //     setTitle,
    //     setEmptyLetter,
    //     arrTemplateNames,
    //     setArrTemplateNames,
    // } = useContext(Context);

    const {
        setShowSaveModal,
        setTemplateName,
        setShowConditionModal,
        showConditionModal,
    } = useContext(Context);

    const handleConditionModal = () => {
        setShowConditionModal(!showConditionModal);
    }

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
            <div>
                {showConditionModal && (
                    <div className="letter__modal-overlay">
                        <div className="letter__modal">
                            <LetterSaveModal/>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={handleConditionModal}
                    className='letter__redactor__button-left-save-modal left'
                    type="submit">
                Сохранить шаблон
            </button>
            <button className="letter__redactor__button-left-save-modal education__closed-button" onClick={() => {
                setShowSaveModal(false);
            }}>
                Вернуться назад
            </button>
        </div>
    );
};

export default LetterConditionModal;
