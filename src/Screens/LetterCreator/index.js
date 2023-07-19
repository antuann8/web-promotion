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

    useEffect(() => {
        // При монтировании компонента восстанавливаем состояние из localStorage
        const savedSelectedOptions = localStorage.getItem('selectedOptions');
        if (savedSelectedOptions) {
            setSelectedOptions(JSON.parse(savedSelectedOptions));
        }

        const savedSelectedFontFamily = localStorage.getItem('selectedFontFamily');
        if (savedSelectedFontFamily) {
            setSelectedFontFamily(JSON.parse(savedSelectedFontFamily));
        }

        const savedSelectedFontSize = localStorage.getItem('selectedFontSize');
        if (savedSelectedFontSize) {
            setSelectedFontSize(JSON.parse(savedSelectedFontSize));
        }

        const savedSelectedColor = localStorage.getItem('selectedColor');
        if (savedSelectedColor) {
            setSelectedColor(JSON.parse(savedSelectedColor));
        }

        const savedSelectedWidth = localStorage.getItem('selectedWidth');
        if (savedSelectedWidth) {
            setSelectedWidth(JSON.parse(savedSelectedWidth));
        }

        const savedSelectedHeight = localStorage.getItem('selectedHeight');
        if (savedSelectedHeight) {
            setSelectedHeight(JSON.parse(savedSelectedHeight));
        }

        const savedSelectedText = localStorage.getItem('selectedText');
        if (savedSelectedText) {
            setSelectedText(JSON.parse(savedSelectedText));
        }

        const savedCalledFunctions = localStorage.getItem('calledFunctions');
        if (savedCalledFunctions) {
            setCalledFunctions(JSON.parse(savedCalledFunctions));
        }

        const savedSelectedArrow = localStorage.getItem('selectedArrow');
        if (savedSelectedArrow) {
            setSelectedArrow(JSON.parse(savedSelectedArrow));
        }

        const savedSelectedImage = localStorage.getItem('selectedImage');
        if (savedSelectedImage) {
            setSelectedImage(JSON.parse(savedSelectedImage));
        }

        const savedTitle = localStorage.getItem('title');
        if (savedTitle) {
            setTitle(JSON.parse(savedTitle));
        }
    }, []);

    useEffect(() => {
        // Каждый раз, когда состояние изменяется, сохраняем его в localStorage
        localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    }, [selectedOptions]);

    useEffect(() => {
        localStorage.setItem('selectedFontFamily', JSON.stringify(selectedFontFamily));
    }, [selectedFontFamily]);

    useEffect(() => {
        localStorage.setItem('selectedFontSize', JSON.stringify(selectedFontSize));
    }, [selectedFontSize]);

    useEffect(() => {
        localStorage.setItem('selectedColor', JSON.stringify(selectedColor));
    }, [selectedColor]);

    useEffect(() => {
        localStorage.setItem('selectedWidth', JSON.stringify(selectedWidth));
    }, [selectedWidth]);

    useEffect(() => {
        localStorage.setItem('selectedHeight', JSON.stringify(selectedHeight));
    }, [selectedHeight]);

    useEffect(() => {
        localStorage.setItem('selectedText', JSON.stringify(selectedText));
    }, [selectedText]);

    useEffect(() => {
        localStorage.setItem('calledFunctions', JSON.stringify(calledFunctions));
    }, [calledFunctions]);

    useEffect(() => {
        localStorage.setItem('selectedArrow', JSON.stringify(selectedArrow));
    }, [selectedArrow]);

    useEffect(() => {
        localStorage.setItem('selectedImage', JSON.stringify(selectedImage));
    }, [selectedImage]);

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(title));
    }, [title]);


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
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    handleImageChange={handleImageChange}

                    clearOneBlock={handleClearOneBlock}
                    colors={colors}
                    fonts={fonts}
                />
            </div>
        </Template>
    );
};

export default LetterCreatorScreen;