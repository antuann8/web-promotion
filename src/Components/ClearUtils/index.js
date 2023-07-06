import {
    clearAllBlocks,
    clearOneBlock,
    get,
} from "../../Models/LetterCreator"

export const getUpdateLetter = async (setEmptyLetter) => {
    const res = await get();
    setEmptyLetter(res);
};

export const handleClearAllBlocks = async (
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize,
) => {

    await clearAllBlocks();
    setSelectedFontFamily([]);
    setSelectedOptions([]);
    setSelectedFontSize([]);

    await getUpdateLetter(setEmptyLetter);
};

export const handleClearOneBlock = async (
                                    index,
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize
) => {

    const response = await clearOneBlock(index);

    // Обновить пустое письмо с результатом POST-запроса
    setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter((_, i) => i !== index));
    setSelectedFontFamily(prevSelectedFontFamily => prevSelectedFontFamily.map((item, i) => i === index ? 'Arial, Helvetica, sans-serif' : item));
    setSelectedFontSize(prevSelectedFontSize => prevSelectedFontSize.filter((_, i) => i !== index));
    setEmptyLetter(response);
}