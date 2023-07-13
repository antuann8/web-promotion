import React from 'react';

const InputBlockArrow = ({
                            label,
                            selectedValue,
                            onChange,
                        }) => {
    return (
        <div>
            <div className="letter__redactor__description">{label}</div>
            <input
                className="letter__redactor__description-value"
                type="text"
                value={selectedValue}
                onChange={onChange}
            />
        </div>
    );
};

export default InputBlockArrow;
