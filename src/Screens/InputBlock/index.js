import React from 'react';

const InputBlock = ({
                        min,
                        max,
                        label,
                        selectedValue,
                        unit,
                        onChange,
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
                onChange={onChange}
            />
            <span> {unit}</span>
        </div>
    );
};

export default InputBlock;
