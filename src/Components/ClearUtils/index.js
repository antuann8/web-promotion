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
                                    setSelectedText,
                                    setCalledFunctions,
) => {

    await clearAllBlocks();
    setSelectedFontFamily([]);
    setSelectedOptions([]);
    setSelectedFontSize([]);
    setSelectedColor([]);
    setSelectedWidth([]);
    setSelectedHeight([]);
    setSelectedText([]);
    setCalledFunctions([]);

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
                                    setSelectedText,
                                    calledFunctions,
                                    setCalledFunctions,
) => {

    const response = await clearOneBlock(index);

    // Обновить пустое письмо с результатом POST-запроса
    setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter((_, i) => i !== index));
    setSelectedFontFamily(prevSelectedFontFamily => prevSelectedFontFamily.map((item, i) => i !== index));
    setSelectedFontSize(prevSelectedFontSize => prevSelectedFontSize.filter((_, i) => i !== index));
    setSelectedColor(prevSelectedColor => prevSelectedColor.filter((_, i) => i !== index));
    setSelectedWidth(prevSelectedWidth => prevSelectedWidth.filter((_, i) => i !== index));
    setSelectedHeight(prevSelectedHeight => prevSelectedHeight.filter((_, i) => i !== index));
    setSelectedText(prevSelectedText => prevSelectedText.filter((_, i) => i !== index));
    setCalledFunctions(calledFunctions.filter((_, i) => i !== index));
    setEmptyLetter(response);
}