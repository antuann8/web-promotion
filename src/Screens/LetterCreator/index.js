import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../Components/Provider";

// template
import Template from "../../Components/Template";

// components
import LetterCenter from "../LetterCenter";
import LetterLeft from "../LetterLeft";
import LetterRight from "../LetterRight";

// custom hooks
import useUpdateBlockSettings from "../../Components/CustomHooks";

// local storage
import useLocalStorageSaver from "../../Components/useLocalStorageSaver";

// functions
import {
    getBlocksCount,
    getUpdateLetter,
} from '../Utils';

import {
    handleSaveClick,
} from '../../Components/SaveUtils'

// styles
import './styles.css';

const LetterCreatorScreen = () => {
    const {templates, setEmptyLetter, setCountBlocks} = useContext(Context);

    useLocalStorageSaver();

    useEffect(() => {
        getUpdateLetter(setEmptyLetter);
        getBlocksCount(setCountBlocks);
    });

    useUpdateBlockSettings();

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <LetterLeft/>
                <LetterCenter/>
                <LetterRight/>
            </div>
            <div className='letter__redactor__save-button__container'>
                <button onClick={() => {handleSaveClick(templates)}} className='letter__redactor__save-button' type="submit">Сохранить шаблон</button>
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;