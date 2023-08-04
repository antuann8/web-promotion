import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../Components/Provider";

const InputBlockText = ({
                        label,
                        selectedValue,
                        onChange,
                        setShowModal,
                        index,
                    }) => {

    // const {templates, setTemplates} = useContext(Context);

    // const handleBlur = (e) => {
    //     const regex = /{([^}]+)}/g;
    //     let match;
    //     while ((match = regex.exec(e.target.value))) {
    //         const value = match[1].trim();
    //         if (value) {
    //             setTemplates((prev) => [...prev, {index, value}]);
    //         }
    //     }
    // }

    return (
        <div>
            <div className="letter__redactor__description">
                {label}, также можете вставить шаблонную переменную <a onClick={() => setShowModal(true)}>(Обучалка)</a>
            </div>
            <input
                id="text-input"
                className="letter__redactor__description-value"
                type="text"
                value={selectedValue}
                onChange={onChange}
                // onBlur={(e) => handleBlur(e)}
            />
            {/*<button onClick={() => console.log(values)}>Показать значения</button>*/}
        </div>
    );
};

export default InputBlockText;
