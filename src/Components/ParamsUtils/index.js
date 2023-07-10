// import {
//     changeParams
// } from "../../Models/LetterCreator";
//
// import {getUpdateLetter} from "../../Screens/Utils";
//
// const updateBlock = async (index, value, setSelected, selected, data, updateFunction, setEmptyLetter) => {
//     const newSelectedOptions = [...selected];
//     newSelectedOptions[index] = value;
//     setSelected(newSelectedOptions);
//
//     await updateFunction(data);
//     await getUpdateLetter(setEmptyLetter);
// };
//
// export const handleBackColorChange = async (
//     index,
//     event,
//     setSelectedOptions,
//     selectedOptions,
//     fontFamily,
//     setEmptyLetter,
//     fontSize,
//     color,
//     width,
//     height,
//     text,
// ) => {
//
//     const updateFontSize = fontSize + 'px';
//     const updateWidth = width + 'px';
//     const updateHeight = height + 'px';
//
//     const data = {
//         'backcolor': event.target.value,
//         'index': index,
//         'fontFamily': fontFamily,
//         'fontSize': updateFontSize,
//         'color' : color,
//         'width' : updateWidth,
//         'height' : updateHeight,
//         'text' : text,
//     }
//     await updateBlock(index, event.target.value, setSelectedOptions, selectedOptions, data, changeParams, setEmptyLetter);
// };
//
// export const handleFontFamilyChange = async (
//     index,
//     event,
//     setSelectedFontFamily,
//     selectedFontFamily,
//     backcolor,
//     setEmptyLetter,
//     fontSize,
//     color,
//     width,
//     height,
//     text,
// ) => {
//
//     const updateFontSize = fontSize + 'px';
//     const updateWidth = width + 'px';
//     const updateHeight = height + 'px';
//
//     const data = {
//         'fontFamily': event.target.value,
//         'index': index,
//         'backcolor': backcolor,
//         'fontSize': updateFontSize,
//         'color' : color,
//         'width' : updateWidth,
//         'height' : updateHeight,
//         'text' : text,
//     }
//     await updateBlock(index, event.target.value, setSelectedFontFamily, selectedFontFamily, data, changeParams, setEmptyLetter);
// };
//
// export const handleFontSizeChange = async (
//     index,
//     event,
//     setSelectedFontSize,
//     selectedFontSize,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     color,
//     width,
//     height,
//     text,
// ) => {
//     let fontSize = event.target.value;
//     if (fontSize >= 2 && fontSize <= 80) {
//         fontSize = event.target.value + 'px';
//     } else {
//         fontSize = '10px';
//     }
//
//     const updateWidth = width + 'px';
//     const updateHeight = height + 'px';
//
//     const data = {
//         'fontFamily': fontFamily,
//         'index': index,
//         'backcolor': backcolor,
//         'fontSize': fontSize,
//         'color' : color,
//         'width' : updateWidth,
//         'height' : updateHeight,
//         'text' : text,
//     }
//
//     await updateBlock(index, event.target.value, setSelectedFontSize, selectedFontSize, data, changeParams, setEmptyLetter);
// };
//
// export const handleColorChange = async (
//     index,
//     event,
//     setSelectedColor,
//     selectedColor,
//     fontFamily,
//     setEmptyLetter,
//     fontSize,
//     backcolor,
//     width,
//     height,
//     text,
// ) => {
//     const updateFontSize = fontSize + 'px';
//     const updateWidth = width + 'px';
//     const updateHeight = height + 'px';
//
//     const data = {
//         'index': index,
//         'backcolor': backcolor,
//         'fontFamily': fontFamily,
//         'fontSize': updateFontSize,
//         'color' : event.target.value,
//         'width' : updateWidth,
//         'height' : updateHeight,
//         'text' : text,
//     }
//     await updateBlock(index, event.target.value, setSelectedColor, selectedColor, data, changeParams, setEmptyLetter);
// };

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

const createDataObject = (index, backcolor, fontFamily, fontSize, color, width, height, text) => {
    return {
        'index': index,
        'backcolor': backcolor,
        'fontFamily': fontFamily,
        'fontSize': fontSize + 'px',
        'color' : color,
        'width' : width + 'px',
        'height' : height + 'px',
        'text' : text,
    }
}

export const handleChange = async (
    type,
    index,
    event,
    setSelected,
    selected,
    backcolor,
    setEmptyLetter,
    fontFamily,
    fontSize,
    color,
    width,
    height,
    text
) => {
    let value = event.target.value;

    if (type === 'fontSize') {
        if (value >= 2 && value <= 80) {
            fontSize = value;
        } else {
            fontSize = 10;
        }
    } else if (type === 'width') {
        if (value >= 10 && value <= 600) {
            width = value;
        } else {
            width = 600;
        }
    } else if (type === 'height') {
        if (value >= 10 && value <= 1000) {
            height = value;
        } else {
            height = 200;
        }
    }

    backcolor = type === 'backcolor' ? event.target.value : backcolor;
    fontFamily = type === 'fontFamily' ? event.target.value : fontFamily;
    fontSize = type === 'fontSize' ? fontSize : fontSize;
    color = type === 'color' ? event.target.value : color;
    width = type === 'width' ? width : width;
    height = type === 'height' ? height : height;
    text = type === 'text' ? event.target.value : text;

    const data = createDataObject(index, backcolor, fontFamily, fontSize, color, width, height, text);

    await updateBlock(index, event.target.value, setSelected, selected, data, changeParams, setEmptyLetter);
};


// export const handleBackColorChange = async (
//     index,
//     event,
//     setSelectedOptions,
//     selectedOptions,
//     fontFamily,
//     setEmptyLetter,
//     fontSize,
//     color,
//     width,
//     height,
//     text,
// ) => {
//     await handleChange('backcolor', index, event, setSelectedOptions, selectedOptions, null, setEmptyLetter, fontFamily, fontSize, color, width, height, text);
// };
//
// export const handleFontFamilyChange = async (
//     index,
//     event,
//     setSelectedFontFamily,
//     selectedFontFamily,
//     backcolor,
//     setEmptyLetter,
//     fontSize,
//     color,
//     width,
//     height,
//     text,
// ) => {
//     await handleChange('fontFamily', index, event, setSelectedFontFamily, selectedFontFamily, backcolor, setEmptyLetter, null, fontSize, color, width, height, text);
// };
//
// export const handleFontSizeChange = async (
//     index,
//     event,
//     setSelectedFontSize,
//     selectedFontSize,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     color,
//     width,
//     height,
//     text,
// ) => {
//     await handleChange('fontSize', index, event, setSelectedFontSize, selectedFontSize, backcolor, setEmptyLetter, fontFamily, null, color, width, height, text);
// };
//
// export const handleColorChange = async (
//     index,
//     event,
//     setSelectedColor,
//     selectedColor,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     fontSize,
//     color,
//     width,
//     height,
//     text,
// ) => {
//     await handleChange('color', index, event, setSelectedColor, selectedColor, backcolor, setEmptyLetter, fontFamily, fontSize, null, width, height, text);
// };
//
// export const handleWidthChange = async (
//     index,
//     event,
//     setSelectedWidth,
//     selectedWidth,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     color,
//     fontSize,
//     height,
//     text, ) => {
//     await handleChange('width', index, event, setSelectedWidth, selectedWidth, backcolor, setEmptyLetter, fontFamily, fontSize, color, null, height, text);
// };
//
// export const handleHeightChange = async (
//     index,
//     event,
//     setSelectedHeight,
//     selectedHeight,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     color,
//     fontSize,
//     width,
//     text,
// ) => {
//     await handleChange('height', index, event, setSelectedHeight, selectedHeight, backcolor, setEmptyLetter, fontFamily, fontSize, color, width, null, text);
// };
//
// export const handleTextChange = async (
//     index,
//     event,
//     setSelectedText,
//     selectedText,
//     fontFamily,
//     backcolor,
//     setEmptyLetter,
//     color,
//     fontSize,
//     width,
//     height
// ) => {
//     await handleChange('text', index, event, setSelectedText, selectedText, backcolor, setEmptyLetter, fontFamily, fontSize, color, width, height);
// };
