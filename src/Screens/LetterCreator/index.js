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

// styles
import './styles.css';

// modals
import LetterConditionModal from "../LetterConditionModal";
import LetterSaveModal from "../LetterSaveModal";

const LetterCreatorScreen = () => {
    const {
        setEmptyLetter,
        setCountBlocks,
        showSaveModal,
        setShowSaveModal,
    } = useContext(Context);

    useLocalStorageSaver();

    useEffect(() => {
        getUpdateLetter(setEmptyLetter);
        getBlocksCount(setCountBlocks);
    });

    useUpdateBlockSettings();

    const handleModal = () => {
        setShowSaveModal(!showSaveModal);
    }

    useEffect(() => {
        const saveButton = document.querySelector('.letter__redactor__save-button__container');
        saveButton.style.display = showSaveModal ? 'none' : 'block';
    }, [showSaveModal])

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <LetterLeft/>
                <LetterCenter/>
                <LetterRight/>
            </div>
            {showSaveModal && (
                <div className="letter__modal-overlay">
                    <div className="letter__modal">
                        <LetterSaveModal/>
                    </div>
                </div>
            )}
            <div className='letter__redactor__save-button__container'>
                <button onClick={handleModal}
                        className='letter__redactor__save-button'
                        type="submit">
                    Сохранить шаблон
                </button>
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;