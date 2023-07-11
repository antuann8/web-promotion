import React, { useEffect, useState } from 'react';

// template
import Template from "../../Components/Template";

// components
import LetterCenter from "../LetterCenter";
import LetterLeft from "../LetterLeft";
import LetterRight from "../LetterRight";

// custom hooks
import useUpdateBlockSettings from "../../Components/CustomHooks";

// functions
import {
    getBlocksCount,
    getUpdateLetter,
    createBlock,
    createArrowBlock,
} from '../Utils';

import {
    handleClearAllBlocks,
    handleClearOneBlock,
} from "../../Components/ClearUtils";

import {
    handleChange,
} from "../../Components/ParamsUtils";

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
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedWidth, setSelectedWidth] = useState([]);
    const [selectedHeight, setSelectedHeight] = useState([]);
    const [selectedText, setSelectedText] = useState([]);


    useEffect(() => {
        getUpdateLetter(setEmptyLetter);
        getBlocksCount(setCountBlocks);
    });

    useUpdateBlockSettings(
        countBlocks,
        selectedFontFamily,
        setSelectedFontFamily,
        selectedFontSize,
        setSelectedFontSize,
        selectedOptions,
        setSelectedOptions,
        selectedColor,
        setSelectedColor,
        selectedWidth,
        setSelectedWidth,
        selectedHeight,
        setSelectedHeight,
        selectedText,
        setSelectedText,
        );

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <LetterLeft
                    createArrowBlock={createArrowBlock}
                    createBlock={createBlock}
                    handleClearAllBlocks={handleClearAllBlocks}
                    setEmptyLetter={setEmptyLetter}
                    setSelectedOptions={setSelectedOptions}
                    setSelectedFontFamily={setSelectedFontFamily}
                    setSelectedFontSize={setSelectedFontSize}
                    setSelectedColor={setSelectedColor}
                    setSelectedWidth={setSelectedWidth}
                    setSelectedHeight={setSelectedHeight}
                    setSelectedText={setSelectedText}
                />
                <LetterCenter emptyLetter={emptyLetter} />
                <LetterRight
                    countBlocks={countBlocks}
                    selectedOptions={selectedOptions}
                    handleChange={handleChange}
                    setSelectedOptions={setSelectedOptions}
                    selectedFontFamily={selectedFontFamily}
                    setEmptyLetter={setEmptyLetter}
                    selectedFontSize={selectedFontSize}
                    setSelectedFontFamily={setSelectedFontFamily}
                    setSelectedFontSize={setSelectedFontSize}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    selectedWidth={selectedWidth}
                    setSelectedWidth={setSelectedWidth}
                    selectedHeight={selectedHeight}
                    setSelectedHeight={setSelectedHeight}
                    selectedText={selectedText}
                    setSelectedText={setSelectedText}

                    clearOneBlock={handleClearOneBlock}
                    colors={colors}
                    fonts={fonts}
                />
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;