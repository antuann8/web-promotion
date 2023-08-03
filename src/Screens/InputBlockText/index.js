import React from 'react';

const InputBlockText = ({
                        label,
                        selectedValue,
                        onChange,
                        setShowModal,
                    }) => {

    const values = []; // массив для хранения значений

    const handleBlur = (event) => {
        const value = event.target.value;
        const matches = value.matchAll(/{\s*([^}]+)\s*}/g);
        for (const match of matches) {
            values.push(match[1]);
        }
    };


    return (
        <div>
            <div className="letter__redactor__description">
                {label}, также можете вставить шаблонную переменную <a onClick={() => setShowModal(true)}>(Обучалка)</a>
            </div>
            <input
                className="letter__redactor__description-value"
                type="text"
                value={selectedValue}
                onChange={onChange}
                onBlur={handleBlur}
            />
            {/*<button onClick={() => console.log(values)}>Показать значения</button>*/}
        </div>
    );
};

export default InputBlockText;
