import React from 'react';

const ClearOneBlockButton = ({
                               index,
                               clearOneBlock,
                               setEmptyLetter,
                               setSelectedOptions,
                               setSelectedFontFamily,
                               setSelectedFontSize }) => {
    return (
        <div>
            <button className="letter__redactor__button-right" onClick={() => clearOneBlock(index,
                setEmptyLetter,
                setSelectedOptions,
                setSelectedFontFamily,
                setSelectedFontSize)}>Удалить блок</button>
        </div>
    );
};

export default ClearOneBlockButton;
