import {
    changeBackColor,
    changeFontFamily,
    changeFontSize
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
    fontSize
) => {
    const updateFontSize = fontSize + 'px';
    const data = {
        'backcolor': event.target.value,
        'index': index,
        'fontFamily': fontFamily,
        'fontSize': updateFontSize,
    }
    await updateBlock(index, event.target.value, setSelectedOptions, selectedOptions, data, changeBackColor, setEmptyLetter);
};

export const handleFontFamilyChange = async (
    index,
    event,
    setSelectedFontFamily,
    selectedFontFamily,
    backcolor,
    setEmptyLetter,
    fontSize
) => {
    const updateFontSize = fontSize + 'px';
    const data = {
        'fontFamily': event.target.value,
        'index': index,
        'backcolor': backcolor,
        'fontSize': updateFontSize,
    }
    await updateBlock(index, event.target.value, setSelectedFontFamily, selectedFontFamily, data, changeFontFamily, setEmptyLetter);
};

export const handleFontSizeChange = async (
    index,
    event,
    setSelectedFontSize,
    selectedFontSize,
    fontFamily,
    backcolor,
    setEmptyLetter
) => {
    let fontSize = event.target.value;
    if (fontSize >= 2 && fontSize <= 80) {
        fontSize = event.target.value + 'px';
    } else {
        fontSize = '10px';
    }

    const data = {
        'fontFamily': fontFamily,
        'index': index,
        'backcolor': backcolor,
        'fontSize': fontSize,
    }

    await updateBlock(index, event.target.value, setSelectedFontSize, selectedFontSize, data, changeFontSize, setEmptyLetter);
};
