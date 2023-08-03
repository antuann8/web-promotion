import React, { useEffect, useState } from 'react';

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
    createBlock,
    createArrowBlock,
    createImageBlock,
} from '../Utils';

import {
    handleClearAllBlocks,
    handleClearOneBlock,
} from "../../Components/ClearUtils";

import {
    handleChange,
    handleImageChange,
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
    const [calledFunctions, setCalledFunctions] = useState([]);
    const [selectedArrow, setSelectedArrow] = useState([]);
    const [selectedImage, setSelectedImage] = useState([]);
    const [title, setTitle] = useState([]);
    const [fileCounter, setFileCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);


    useLocalStorageSaver(
        selectedOptions,
        setSelectedOptions,
        selectedFontFamily,
        setSelectedFontFamily,
        selectedFontSize,
        setSelectedFontSize,
        selectedColor,
        setSelectedColor,
        selectedWidth,
        setSelectedWidth,
        selectedHeight,
        setSelectedHeight,
        selectedText,
        setSelectedText,
        calledFunctions,
        setCalledFunctions,
        selectedArrow,
        setSelectedArrow,
        selectedImage,
        setSelectedImage,
        title,
        setTitle,
        fileCounter,
        setFileCounter,
    );

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
        selectedArrow,
        setSelectedArrow,
        );

    return (
        <Template>
            <h1 className="letter__redactor__header">Визуальный редактор письма</h1>
            <div className="letter__redactor__container">
                <LetterLeft
                    showModal={showModal}
                    setShowModal={setShowModal}
                    title={title}
                    setTitle={setTitle}
                    calledFunctions={calledFunctions}
                    setCalledFunctions={setCalledFunctions}
                    createImageBlock={createImageBlock}
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
                    setSelectedArrow={setSelectedArrow}
                    setSelectedImage={setSelectedImage}
                />
                <LetterCenter emptyLetter={emptyLetter} />
                <LetterRight
                    showModal={showModal}
                    setShowModal={setShowModal}
                    title={title}
                    setTitle={setTitle}
                    setCalledFunctions={setCalledFunctions}
                    calledFunctions={calledFunctions}
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
                    selectedArrow={selectedArrow}
                    setSelectedArrow={setSelectedArrow}
                    handleImageChange={handleImageChange}
                    setFileCounter={setFileCounter}
                    fileCounter={fileCounter}

                    clearOneBlock={handleClearOneBlock}
                    colors={colors}
                    fonts={fonts}
                />
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;