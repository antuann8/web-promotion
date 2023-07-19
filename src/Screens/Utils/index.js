import {
    get,
    getCountBlocks,
    addBlock,
    addArrowBlock,
    addImageBlock,
} from "../../Models/LetterCreator"

export const getBlocksCount = async (setCountBlocks) => {
    const res = await getCountBlocks();
    setCountBlocks(res);
};

export const getUpdateLetter = async (setEmptyLetter) => {
    const res = await get();
    setEmptyLetter(res);
};

export const createBlock = async (setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title) => {

    setCalledFunctions([...calledFunctions, 'createBlock']);
    setTitle([...title, 'Блок с текстом']);

    const data = {
        backcolor: '#00ff00',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '10px',
        color: '#000000',
        width: '600px',
        height: '30px',
        text: 'Измените текст, фон блока, фон текста в управлении блоком',
        type: 'text',
    };
    // Отправить POST-запрос
    await addBlock(data);

    await getUpdateLetter(setEmptyLetter);
};

export const createArrowBlock = async (setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title) => {

    setCalledFunctions([...calledFunctions, 'createArrowBlock']);
    setTitle([...title, 'Блок с ссылкой']);

    const data = {
        backcolor: '#00ff00',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '10px',
        color: '#000000',
        width: '600px',
        height: '30px',
        text: 'Измените текст, фон блока, фон текста в управлении блоком',
        type: 'arrow',
        arrow: '#',
    };
    // Отправить POST-запрос
    await addArrowBlock(data);

    await getUpdateLetter(setEmptyLetter);
};

export const createImageBlock = async (setEmptyLetter, setCalledFunctions, calledFunctions, setTitle, title) => {

    setCalledFunctions([...calledFunctions, 'createImageBlock']);
    setTitle([...title, 'Блок с изображением']);

    const data = {
        width: "600px",
    };
    // Отправить POST-запрос
    await addImageBlock(data);

    await getUpdateLetter(setEmptyLetter);
};