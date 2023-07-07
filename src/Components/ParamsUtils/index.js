import {
    changeParams
} from "../../Models/LetterCreator";

import {getUpdateLetter} from "../../Screens/Utils";

const updateBlock = async (index, value, setSelected, selected, data, updateFunction, setEmptyLetter) => {
    const newSelectedOptions = [...selected];
    newSelectedOptions[index] = value;
    setSelected(newSelectedOptions);

    await updateFunction(data);
    await getUpdateLetter(setEmptyLetter);
};

export const handleBackColorChange = async (
    index,
    event,
    setSelectedOptions,
    selectedOptions,
    fontFamily,
    setEmptyLetter,
    fontSize,
    color,
    width,
) => {
    const updateFontSize = fontSize + 'px';
    const updateWidth = width + 'px';
    const data = {
        'backcolor': event.target.value,
        'index': index,
        'fontFamily': fontFamily,
        'fontSize': updateFontSize,
        'color' : color,
        'width' : updateWidth,
    }
    await updateBlock(index, event.target.value, setSelectedOptions, selectedOptions, data, changeParams, setEmptyLetter);
};

export const handleFontFamilyChange = async (
    index,
    event,
    setSelectedFontFamily,
    selectedFontFamily,
    backcolor,
    setEmptyLetter,
    fontSize,
    color,
    width,
) => {
    const updateFontSize = fontSize + 'px';
    const updateWidth = width + 'px';
    const data = {
        'fontFamily': event.target.value,
        'index': index,
        'backcolor': backcolor,
        'fontSize': updateFontSize,
        'color' : color,
        'width' : updateWidth,
    }
    await updateBlock(index, event.target.value, setSelectedFontFamily, selectedFontFamily, data, changeParams, setEmptyLetter);
};

export const handleFontSizeChange = async (
    index,
    event,
    setSelectedFontSize,
    selectedFontSize,
    fontFamily,
    backcolor,
    setEmptyLetter,
    color,
    width,
) => {
    let fontSize = event.target.value;
    if (fontSize >= 2 && fontSize <= 80) {
        fontSize = event.target.value + 'px';
    } else {
        fontSize = '10px';
    }

    const updateWidth = width + 'px';
    const data = {
        'fontFamily': fontFamily,
        'index': index,
        'backcolor': backcolor,
        'fontSize': fontSize,
        'color' : color,
        'width' : updateWidth,
    }

    await updateBlock(index, event.target.value, setSelectedFontSize, selectedFontSize, data, changeParams, setEmptyLetter);
};

export const handleColorChange = async (
    index,
    event,
    setSelectedColor,
    selectedColor,
    fontFamily,
    setEmptyLetter,
    fontSize,
    backcolor,
    width,
) => {
    const updateFontSize = fontSize + 'px';
    const updateWidth = width + 'px';

    const data = {
        'index': index,
        'backcolor': backcolor,
        'fontFamily': fontFamily,
        'fontSize': updateFontSize,
        'color' : event.target.value,
        'width' : updateWidth,
    }
    await updateBlock(index, event.target.value, setSelectedColor, selectedColor, data, changeParams, setEmptyLetter);
};

export const handleWidthChange = async (
    index,
    event,
    setSelectedWidth,
    selectedWidth,
    fontFamily,
    backcolor,
    setEmptyLetter,
    color,
    fontSize,
) => {

    const updateFontSize = fontSize + 'px';
    let width = event.target.value;
    if (width >= 10 && width <= 600) {
        width = event.target.value + 'px';
    } else {
        width = '600px';
    }

    const data = {
        'fontFamily': fontFamily,
        'index': index,
        'backcolor': backcolor,
        'fontSize': updateFontSize,
        'color' : color,
        'width' : width,
    }

    await updateBlock(index, event.target.value, setSelectedWidth, selectedWidth, data, changeParams, setEmptyLetter);
};