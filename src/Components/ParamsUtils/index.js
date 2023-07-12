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

const createDataObject = (blockType, index, backcolor, fontFamily, fontSize, color, width, height, text) => {
    return {
        'blockType' : blockType,
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
    blockType,
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
        if (value >= 1 && value <= 100) {
            height = value;
        } else {
            height = 30;
        }
    }

    backcolor = type === 'backcolor' ? event.target.value : backcolor;
    fontFamily = type === 'fontFamily' ? event.target.value : fontFamily;
    color = type === 'color' ? event.target.value : color;
    text = type === 'text' ? event.target.value : text;

    const data = createDataObject(blockType, index, backcolor, fontFamily, fontSize, color, width, height, text);

    await updateBlock(index, event.target.value, setSelected, selected, data, changeParams, setEmptyLetter);
};
