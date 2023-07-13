import React from 'react';

const ClearOneBlockButton = ({
                            index,
                            clearOneBlock,
                            setEmptyLetter,
                            setSelectedOptions,
                            setSelectedFontFamily,
                            setSelectedFontSize,
                            setSelectedColor,
                            setSelectedWidth,
                            setSelectedHeight,
                            setSelectedText,
                            calledFunctions,
                            setCalledFunctions,
                            setSelectedArrow,
                                }) => {
    return (
        <div>
            <button className="letter__redactor__button-right" onClick={() => clearOneBlock(index,
                setEmptyLetter,
                setSelectedOptions,
                setSelectedFontFamily,
                setSelectedFontSize,
                setSelectedColor,
                setSelectedWidth,
                setSelectedHeight,
                setSelectedText,
                calledFunctions,
                setCalledFunctions,
                setSelectedArrow,
            )}>Удалить блок</button>
        </div>
    );
};

export default ClearOneBlockButton;
