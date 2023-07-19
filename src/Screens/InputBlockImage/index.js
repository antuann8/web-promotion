import React from 'react';

const InputBlockImage = ({
                             label,
                             // selectedValue,
                             onChange,
                         }) => {
    return (
        <div>
            <div className="letter__redactor__description">{label}</div>
            <input
                className="letter__redactor__description-value"
                type="file"
                // value={selectedValue}
                onChange={onChange}
            />
        </div>
    );
};

export default InputBlockImage;
