import React from 'react';

const InputBlock = ({
                        index,
                        selectedFontSize,
                        handleFontSizeChange,
                        setSelectedFontSize,
                        selectedFontFamily,
                        selectedOptions,
                        setEmptyLetter,
                        min,
                        max,
                        label,
                        selectedValue,
                        unit,
                        selectedColor,
                        }) => {
    return (
        <div>
            <div className="letter__redactor__description">{label}</div>
            <input
                className="letter__redactor__description-value"
                type="number"
                min={min}
                max={max}
                value={selectedValue}
                onChange={(event) => {
                    handleFontSizeChange(
                        index,
                        event,
                        setSelectedFontSize,
                        selectedFontSize,
                        selectedFontFamily[index],
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedColor[index],
                    );
                }}
            />
            <span> {unit}</span>
        </div>
    );
};

export default InputBlock;
