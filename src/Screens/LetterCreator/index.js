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
} from '../Utils';

import {
    handleClearAllBlocks,
    handleClearOneBlock,
} from "../../Components/ClearUtils";

import {
    handleBackColorChange,
    handleFontFamilyChange,
    handleFontSizeChange,
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
        setSelectedOptions);

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <LetterLeft
                    createBlock={createBlock}
                    handleClearAllBlocks={handleClearAllBlocks}
                    setEmptyLetter={setEmptyLetter}
                    setSelectedOptions={setSelectedOptions}
                    setSelectedFontFamily={setSelectedFontFamily}
                    setSelectedFontSize={setSelectedFontSize}
                />
                <LetterCenter emptyLetter={emptyLetter} />
                <LetterRight
                    countBlocks={countBlocks}
                    selectedOptions={selectedOptions}
                    handleBackColorChange={handleBackColorChange}
                    setSelectedOptions={setSelectedOptions}
                    selectedFontFamily={selectedFontFamily}
                    setEmptyLetter={setEmptyLetter}
                    selectedFontSize={selectedFontSize}
                    handleFontFamilyChange={handleFontFamilyChange}
                    setSelectedFontFamily={setSelectedFontFamily}
                    handleFontSizeChange={handleFontSizeChange}
                    setSelectedFontSize={setSelectedFontSize}
                    clearOneBlock={handleClearOneBlock}
                    colors={colors}
                    fonts={fonts}
                />
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;