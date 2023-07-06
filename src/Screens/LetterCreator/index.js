import React, { useEffect, useState } from 'react';

// template
import Template from "../../Components/Template";

// components
import SelectBlock from "../SelectBlock";
import LetterCenter from "../LetterCenter";

// functions
import {
    getBlocksCount,
    getUpdateLetter,
    createBlock,
    clearOneBlock,
    handleClearAllBlocks,
    handleBackColorChange,
    handleFontFamilyChange,
    handleFontSizeChange,
} from '../Utils';

// styles
import './styles.css';

// constants
import {colors, fonts} from '../../Globals/Constants/index'

const LetterCreatorScreen = () => {
    const [emptyLetter, setEmptyLetter] = useState(null);
    const [countBlocks, setCountBlocks] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedFontFamily, setSelectedFontFamily] = useState([]);
    const [selectedFontSize, setSelectedFontSize] = useState([]);

    useEffect(() => {
        getUpdateLetter(setEmptyLetter);
        getBlocksCount(setCountBlocks);
    });

    useEffect(() => {
        if (selectedFontFamily.length < countBlocks) {
            setSelectedFontFamily(prevSelectedFontFamily => [...prevSelectedFontFamily, fonts["1"]]);
        }
    }, [countBlocks, selectedFontFamily]);

    useEffect(() => {
        if (selectedFontSize.length < countBlocks) {
            setSelectedFontSize(prevSelectedFontSize => [...prevSelectedFontSize, "10"]);
        }
    }, [countBlocks, selectedFontSize]);

    useEffect(() => {
        if (selectedOptions.length < countBlocks) {
            setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, colors['Зеленый']]);
        }
    }, [countBlocks, selectedOptions]);

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <div className="letter__redactor-left">
                    <div className="letter__redactor__button__container letter__one">
                        <button className="letter__redactor__button-left" onClick={() => createBlock(setEmptyLetter
                            // , setSelectedOptions,
                            // setSelectedFontFamily
                        )}>Создание блока с текстом</button>
                        <button className="letter__redactor__button-left" onClick={() => handleClearAllBlocks(setEmptyLetter, setSelectedOptions, setSelectedFontFamily, setSelectedFontSize)}>Очистить все блоки</button>
                    </div>
                </div>
                {/*<div className="letter__redactor-center">*/}
                {/*    {emptyLetter ? (*/}
                {/*        <span className='letter__reset' dangerouslySetInnerHTML={{ __html: emptyLetter }}></span>*/}
                {/*    ) : (*/}
                {/*        <div>Loading...</div>*/}
                {/*    )}*/}
                {/*</div>*/}
                <LetterCenter emptyLetter={emptyLetter} />
                <div className='letter__redactor-right'>
                    <h2>Управление блоками ({countBlocks})</h2>

                    {
                        Array.from({ length: countBlocks }, (_, index) => (
                            <div key={index}>
                                <h3>Блок №{index + 1}</h3>
                                <div>
                                    <SelectBlock
                                        label="Выберите задний фон блока:"
                                        selectValue={selectedOptions[index]}
                                        onChange={(event) => {
                                            handleBackColorChange(
                                                index,
                                                event,
                                                setSelectedOptions,
                                                selectedOptions,
                                                selectedFontFamily[index],
                                                setEmptyLetter,
                                                selectedFontSize[index],
                                            );
                                        }}
                                        options={colors}
                                    />
                                    <SelectBlock
                                        label="Выберите шрифт текста блока:"
                                        selectValue={selectedFontFamily[index]}
                                        onChange={(event) => {
                                            handleFontFamilyChange(
                                                index,
                                                event,
                                                setSelectedFontFamily,
                                                selectedFontFamily,
                                                selectedOptions[index],
                                                setEmptyLetter,
                                                selectedFontSize[index]);
                                        }}
                                        options={fonts}
                                    />
                                    <div>
                                        <div className="letter__redactor__description">Введите значение шрифта в px (max: 80, min: 2)</div>
                                        <input
                                            className="letter__redactor__description-value"
                                            type="number"
                                            min="2"
                                            max="80"
                                            value={selectedFontSize[index]}
                                            onChange={(event) => {
                                                handleFontSizeChange(
                                                    index,
                                                    event,
                                                    setSelectedFontSize,
                                                    selectedFontSize,
                                                    selectedFontFamily[index],
                                                    selectedOptions[index],
                                                    setEmptyLetter,
                                                );
                                            }}
                                        />
                                        <span> px</span>
                                    </div>
                                    <div>
                                        <button className="letter__redactor__button-right" onClick={() => clearOneBlock(index, setEmptyLetter, setSelectedOptions, setSelectedFontFamily, setSelectedFontSize)}>Удалить блок</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;