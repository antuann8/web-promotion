import {
    get,
    getCountBlocks,
    addBlock,
    addArrowBlock,
} from "../../Models/LetterCreator"

export const getBlocksCount = async (setCountBlocks) => {
    const res = await getCountBlocks();
    setCountBlocks(res);
};

export const getUpdateLetter = async (setEmptyLetter) => {
    const res = await get();
    setEmptyLetter(res);
};

export const createBlock = async (setEmptyLetter, setCalledFunction) => {

    setCalledFunction('createBlock');

    const data = {
        backcolor: '#00ff00',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '10px',
        color: '#000000',
        width: '600px',
        height: '30px',
        text: 'Измените текст, фон блока, фон текста в управлении блоком',
    };
    // Отправить POST-запрос
    await addBlock(data);

    await getUpdateLetter(setEmptyLetter);
};

export const createArrowBlock = async (setEmptyLetter, setCalledFunction) => {

    setCalledFunction('createArrowBlock');

    const data = {
        backcolor: '#00ff00',
    };
    // Отправить POST-запрос
    await addArrowBlock(data);

    await getUpdateLetter(setEmptyLetter);
};