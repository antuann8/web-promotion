import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../Components/Provider";

const InputBlockTextEmail = ({
                            item,
                            selectedValue,
                            onChange,
                        }) => {

    const [initialItem] = useState(item);

    return (
        <div>
            <div className="letter__redactor__description">
                Введите текст для переменной {initialItem}
            </div>
            <input
                className="letter__redactor__description-value"
                type="text"
                value={selectedValue}
                onChange={onChange}
            />
        </div>
    );
};

export default InputBlockTextEmail;
