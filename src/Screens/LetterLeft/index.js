import React from 'react';

const LetterLeft = ({
                        calledFunctions,
                        createBlock,
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
                    }) => {
    return (
        <div className="letter__redactor-left">
            <div className="letter__redactor__button__container letter__one">
                <button className="letter__redactor__button-left" onClick={() => createBlock(setEmptyLetter, setCalledFunctions, calledFunctions)}>Создание блока с текстом</button>
                <button className="letter__redactor__button-left" onClick={() => createArrowBlock(setEmptyLetter, setCalledFunctions, calledFunctions)}>Создание блока с ссылкой</button>
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
                )}>Очистить все блоки</button>
            </div>
        </div>
    );
};

export default LetterLeft;
