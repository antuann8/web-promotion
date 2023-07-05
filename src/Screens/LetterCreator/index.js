import React, { useEffect, useState } from 'react';

// template
import Template from "../../Components/Template";

// functions
import { getBlocksCount, getUpdateLetter, handleClearAllBlocks, createBlock, clearOneBlock, handleBackColorChange,
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
            <h1 className="letter-redactor__header">Визуальный редактор письма</h1>
            <div className="letter-redactor__container">
                <div className="letter-redactor__button__container letter__one">
                    <button className="letter-redactor__button" onClick={() => createBlock(setEmptyLetter
                        // , setSelectedOptions,
                        // setSelectedFontFamily
                    )}>Создание блока с текстом</button>
                    <button className="letter-redactor__button" onClick={() => handleClearAllBlocks(setEmptyLetter, setSelectedOptions, setSelectedFontFamily, setSelectedFontSize)}>Очистить все блоки</button>
                </div>
                <div className="output__container letter__three">
                    {emptyLetter ? (
                        <span className='letter__reset' dangerouslySetInnerHTML={{ __html: emptyLetter }}></span>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <div className='letter-redactor__blocks__container letter__two'>
                    <h2>Управление блоками {countBlocks}</h2>

                    {
                        Array.from({ length: countBlocks }, (_, index) => (
                            <div key={index}>
                                <h3>Блок №{index + 1}</h3>
                                <div>
                                    <div>
                                        <span>Выберите задний фон блока:</span>
                                        <select value={selectedOptions[index]} onChange={(event) => {
                                            handleBackColorChange(
                                                index,
                                                event,
                                                setSelectedOptions,
                                                selectedOptions,
                                                selectedFontFamily[index],
                                                setEmptyLetter,
                                                selectedFontSize[index],
                                            );
                                        }}>
                                            {
                                                Object.entries(colors).map(([name, value]) => (
                                                    <option key={value} value={value}>
                                                        {name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <span>Выберите шрифт текста блока:</span>
                                        <select value={selectedFontFamily[index]} onChange={(event) => {
                                            handleFontFamilyChange(index, event, setSelectedFontFamily, selectedFontFamily, selectedOptions[index], setEmptyLetter, selectedFontSize[index]);
                                        }}>
                                            {
                                                Object.entries(fonts).map(([name, value]) => (
                                                    <option key={name} value={value}>
                                                        {value}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <div>Введите значение шрифта в px (max: 80, min: 2)</div>
                                        <input
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

                                    </div>
                                    <div>
                                        <button className="letter-redactor__button-manage" onClick={() => clearOneBlock(index, setEmptyLetter, setSelectedOptions, setSelectedFontFamily, setSelectedFontSize)}>Удалить блок</button>
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