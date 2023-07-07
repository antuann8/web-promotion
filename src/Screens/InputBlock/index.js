import React from 'react';

const InputBlock = ({
                        min,
                        max,
                        label,
                        selectedValue,
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
        </div>
    );
};

export default InputBlock;
