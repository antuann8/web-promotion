import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../Components/Provider";

const InputBlockEmail = ({
                            label,
                            selectedValue,
                            onChange,
                        }) => {

    // const handleBlur = (event) => {
    //
    // };

    return (
        <div>
            <div className="letter__redactor__description">
                {label}
            </div>
            <input
                className="letter__redactor__description-value"
                type="text"
                value={selectedValue}
                onChange={onChange}
                // onBlur={(e) => handleBlur(e)}
            />
        </div>
    );
};

export default InputBlockEmail;
