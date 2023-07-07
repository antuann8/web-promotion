import {
    clearAllBlocks,
    clearOneBlock,
} from "../../Models/LetterCreator"

import {
    getUpdateLetter
} from "../../Screens/Utils";

export const handleClearAllBlocks = async (
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize,
                                    setSelectedColor,
                                    setSelectedWidth,
                                    setSelectedHeight,
) => {

    await clearAllBlocks();
    setSelectedFontFamily([]);
    setSelectedOptions([]);
    setSelectedFontSize([]);
    setSelectedColor([]);
    setSelectedWidth([]);
    setSelectedHeight([]);

    await getUpdateLetter(setEmptyLetter);
};

export const handleClearOneBlock = async (
                                    index,
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize,
                                    setSelectedColor,
                                    setSelectedWidth,
                                    setSelectedHeight,
) => {

    const response = await clearOneBlock(index);

    // Обновить пустое письмо с результатом POST-запроса
    setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter((_, i) => i !== index));
    setSelectedFontFamily(prevSelectedFontFamily => prevSelectedFontFamily.map((item, i) => i === index ? 'Arial, Helvetica, sans-serif' : item));
    setSelectedFontSize(prevSelectedFontSize => prevSelectedFontSize.filter((_, i) => i !== index));
    setSelectedColor(prevSelectedColor => prevSelectedColor.filter((_, i) => i !== index));
    setSelectedWidth(prevSelectedWidth => prevSelectedWidth.filter((_, i) => i !== index));
    setSelectedHeight(prevSelectedHeight => prevSelectedHeight.filter((_, i) => i !== index));
    setEmptyLetter(response);
}