import React from 'react';

const LetterLeft = ({
                        setTitle,
                        title,
                        calledFunctions,
                        createBlock,
                        createImageBlock,
                        createArrowBlock,
                        setCalledFunctions,
                        handleClearAllBlocks,
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
                    }) => {
    return (
        <div className="letter__redactor-left">
            <div className="letter__redactor__button__container letter__one">
                <button className="letter__redactor__button-left" onClick={() => createBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с текстом</button>
                <button className="letter__redactor__button-left" onClick={() => createArrowBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с ссылкой</button>
                <button className="letter__redactor__button-left" onClick={() => createImageBlock(setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title)}>Создание блока с изображением</button>
                <button className="letter__redactor__button-left" onClick={() => handleClearAllBlocks(
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
