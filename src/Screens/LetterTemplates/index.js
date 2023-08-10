import React, {useContext, useEffect, useState} from 'react';
import Template from "../../Components/Template";


// styles
import './styles.css';
import Loader from "../../Components/Loader";
import {Context} from "../../Components/Provider";

const LetterTemplatesScreen = () => {

    const {
        arrTemplateNames
    } = useContext(Context);

    // useEffect(() => {
    //
    //     const res = async () => {
    //
    //     }
    //     res();
    // }, [])

    return (
        <Template>
            <h1>Шаблоны письма</h1>
            {
                arrTemplateNames.map((item, index) => <div key={index}>
                    <h1>{item}</h1>
                </div>)
            }
        </Template>
    )
}

export default LetterTemplatesScreen;