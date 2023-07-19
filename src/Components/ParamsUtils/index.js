import {
    changeParams,
    changeImage,
    changeImageName,
} from "../../Models/LetterCreator";

import {getUpdateLetter} from "../../Screens/Utils";

const updateBlock = async (index, value, setSelected, selected, data, updateFunction, setEmptyLetter) => {
    const newSelectedOptions = [...selected];
    newSelectedOptions[index] = value;
    setSelected(newSelectedOptions);

    await updateFunction(data);
    await getUpdateLetter(setEmptyLetter);
};

const createDataObject = (blockType, index, backcolor, fontFamily, fontSize, color, width, height, text, arrow) => {
    if (blockType === 'text') {
        return {
            'blockType': blockType,
            'index': index,
            'backcolor': backcolor,
            'fontFamily': fontFamily,
            'fontSize': fontSize + 'px',
            'color': color,
            'width': width + 'px',
            'height': height + 'px',
            'text': text,
        }
    } else if (blockType === 'arrow') {
        return {
            'blockType': blockType,
            'index': index,
            'backcolor': backcolor,
            'fontFamily': fontFamily,
            'fontSize': fontSize + 'px',
            'color': color,
            'width': width + 'px',
            'height': height + 'px',
            'text': text,
            'arrow' : arrow,
        }
    } else if (blockType === 'image') {
        return {
            'blockType' : blockType,
            'index': index,
            'width' : width + 'px',
        }
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
    text,
    arrow,
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
    arrow = type === 'arrow' ? event.target.value : arrow;

    const data = createDataObject(blockType, index, backcolor, fontFamily, fontSize, color, width, height, text, arrow);

    await updateBlock(index, event.target.value, setSelected, selected, data, changeParams, setEmptyLetter);
};

export const handleImageChange = async (
    index,
    event,
    setEmptyLetter,
    setFileCounter,
    fileCounter,
) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop();

    // Используем инкрементированное имя файла
    const incrementedName = `image-${fileCounter}.${fileExtension}`;
    setFileCounter(fileCounter + 1);

    console.log(`Инкрементированное имя файла: ${incrementedName}`);

        await changeImageName(incrementedName);
        await changeImage(file);
        await getUpdateLetter(setEmptyLetter);
}