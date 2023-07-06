import React from 'react';

const SelectBlock = ({ label, selectValue, onChange, options }) => {
    return (
        <div>
            <div className="letter__redactor__description">{label}</div>
            <select
                className="letter__redactor__description-value"
                value={selectValue}
                onChange={onChange}
            >
                {Object.entries(options).map(([name, value]) => (
                    <option key={name} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectBlock;
