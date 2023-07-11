import React from 'react';

const LetterLeft = ({
                        createBlock,
                        createArrowBlock,
                        setCalledFunction,
                        handleClearAllBlocks,
                        setEmptyLetter,
                        setSelectedOptions,
                        setSelectedFontFamily,
                        setSelectedFontSize,
                        setSelectedColor,
                        setSelectedWidth,
                        setSelectedHeight,
                        setSelectedText,
                    }) => {
    return (
        <div className="letter__redactor-left">
            <div className="letter__redactor__button__container letter__one">
                <button className="letter__redactor__button-left" onClick={() => createBlock(setEmptyLetter, setCalledFunction)}>Создание блока с текстом</button>
                <button className="letter__redactor__button-left" onClick={() => createArrowBlock(setEmptyLetter, setCalledFunction)}>Создание блока с ссылкой</button>
                <button className="letter__redactor__button-left" onClick={() => handleClearAllBlocks(
                    setEmptyLetter,
                    setSelectedOptions,
                    setSelectedFontFamily,
                    setSelectedFontSize,
                    setSelectedColor,
                    setSelectedWidth,
                    setSelectedHeight,
                    setSelectedText,
                )}>Очистить все блоки</button>
            </div>
        </div>
    );
};

export default LetterLeft;
