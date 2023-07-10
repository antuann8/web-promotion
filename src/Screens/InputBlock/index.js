import React from 'react';

const InputBlock = ({
                        min,
                        max,
                        label,
                        selectedValue,
                        onChange,
                        }) => {

    const handleBlur = (event) => {
        const value = parseInt(event.target.value);
        if (value < min) {
            event.target.value = min;
            onChange({ target: { value: min } });
        } else if (value > max) {
            event.target.value = max;
            onChange({ target: { value: max } });
        }
    };

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
                onBlur={handleBlur}
            />
        </div>
    );
};

export default InputBlock;
