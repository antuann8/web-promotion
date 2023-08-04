import React, {useContext, useState} from 'react';
import {Context} from "../../Components/Provider";

import LetterLeftModal from "../LetterLeftModal";
import {createBlock, createImageBlock, createArrowBlock} from "../Utils";
import {handleClearAllBlocks} from "../../Components/ClearUtils";
// styles
import './styles.css';


const LetterLeft = ({
                        // showModal,
                        // setShowModal,
                        // setTitle,
                        // title,
                        // calledFunctions,
                        // createBlock,
                        // createImageBlock,
                        // createArrowBlock,
                        // setCalledFunctions,
                        // handleClearAllBlocks,
                        // setEmptyLetter,
                        // setSelectedOptions,
                        // setSelectedFontFamily,
                        // setSelectedFontSize,
                        // setSelectedColor,
                        // setSelectedWidth,
                        // setSelectedHeight,
                        // setSelectedText,
                        // setSelectedArrow,
                        // setSelectedImage,
                    }) => {

    const {showModal,
        setShowModal,
        setTitle,
        title,
        calledFunctions,
        setCalledFunctions,
        setEmptyLetter,
        setSelectedOptions,
        setSelectedFontFamily,
        setSelectedFontSize,
        setSelectedColor,
        setSelectedWidth,
        setSelectedHeight,
        setSelectedText,
        setSelectedArrow,
        setSelectedImage,
        setTemplates, } = useContext(Context);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="letter__redactor-left">
            <div className="letter__redactor__button__container letter__one">
                <button className="letter__redactor__button-left" onClick={() => createBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с текстом</button>
                <button className="letter__redactor__button-left" onClick={() => createArrowBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с ссылкой</button>
                <button className="letter__redactor__button-left" onClick={() => createImageBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с изображением</button>

                {showModal && (
                    <div className="letter__modal-overlay">
                        <div className="letter__modal">
                            <LetterLeftModal
                                handleModal={handleModal}
                                // setShowModal={setShowModal}
                            />
                        </div>
                    </div>
                )}
                <button className="letter__redactor__button-left" onClick={handleModal}> Обучалка по вставке шаблонных переменных </button>
                <button className="letter__redactor__button-left" onClick={() => handleClearAllBlocks(
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
                )}>Очистить все блоки</button>
            </div>
        </div>
    );
};

export default LetterLeft;
