import {
    clearAllBlocks,
    clearOneBlock,
} from "../../Models/LetterCreator"

import {
    getUpdateLetter
} from "../../Screens/Utils";

export const handleClearAllBlocks = async (
                                    setTemplates,
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize,
                                    setSelectedColor,
                                    setSelectedWidth,
                                    setSelectedHeight,
                                    setSelectedText,
                                    setCalledFunctions,
                                    setSelectedArrow,
                                    setSelectedImage,
                                    setTitle,
) => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let fileCounter = localStorage.getItem('fileCounter');
    let templateNames = localStorage.getItem('templateNames');

    await clearAllBlocks();
    setSelectedFontFamily([]);
    setSelectedOptions([]);
    setSelectedFontSize([]);
    setSelectedColor([]);
    setSelectedWidth([]);
    setSelectedHeight([]);
    setSelectedText([]);
    setCalledFunctions([]);
    setSelectedArrow([]);
    setSelectedImage([]);
    setTitle([]);
    setTemplates([]);

    localStorage.clear();

    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('fileCounter', fileCounter);
    localStorage.setItem('templateNames', templateNames);

    await getUpdateLetter(setEmptyLetter);
};

export const handleClearOneBlock = async (
                                    setTemplates,
                                    index,
                                    setEmptyLetter,
                                    selectedOptions,
                                    setSelectedOptions,
                                    selectedFontFamily,
                                    setSelectedFontFamily,
                                    selectedFontSize,
                                    setSelectedFontSize,
                                    selectedColor,
                                    setSelectedColor,
                                    selectedWidth,
                                    setSelectedWidth,
                                    selectedHeight,
                                    setSelectedHeight,
                                    selectedText,
                                    setSelectedText,
                                    calledFunctions,
                                    setCalledFunctions,
                                    selectedArrow,
                                    setSelectedArrow,
                                    title,
                                    setTitle,
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
    setSelectedArrow(prevSelectedArrow => prevSelectedArrow.filter((_, i) => i !== index));
    setTitle(title.filter((_, i) => i !== index));
    setTemplates(prev => prev.filter((_, i) => i !== index));

    let selectedOptionsArray = JSON.parse(localStorage.getItem('selectedOptions'));
    selectedOptionsArray.splice(index, 1);
    localStorage.removeItem('selectedOptions');
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptionsArray));


    let selectedFontFamilyArray = JSON.parse(localStorage.getItem('selectedFontFamily'));
    selectedFontFamilyArray.splice(index, 1);
    localStorage.removeItem('selectedFontFamily');
    localStorage.setItem('selectedFontFamily', JSON.stringify(selectedFontFamilyArray));

    let selectedFontSizeArray = JSON.parse(localStorage.getItem('selectedFontSize'));
    selectedFontSizeArray.splice(index, 1);
    localStorage.removeItem('selectedFontSize');
    localStorage.setItem('selectedFontSize', JSON.stringify(selectedFontSizeArray));

    let selectedColorArray = JSON.parse(localStorage.getItem('selectedColor'));
    selectedColorArray.splice(index, 1);
    localStorage.removeItem('selectedColor');
    localStorage.setItem('selectedColor', JSON.stringify(selectedColorArray));

    let selectedWidthArray = JSON.parse(localStorage.getItem('selectedWidth'));
    selectedWidthArray.splice(index, 1);
    localStorage.removeItem('selectedWidth');
    localStorage.setItem('selectedWidth', JSON.stringify(selectedWidthArray));

    let selectedHeightArray = JSON.parse(localStorage.getItem('selectedHeight'));
    selectedHeightArray.splice(index, 1);
    localStorage.removeItem('selectedHeight');
    localStorage.setItem('selectedHeight', JSON.stringify(selectedHeightArray));

    let selectedTextArray = JSON.parse(localStorage.getItem('selectedText'));
    selectedTextArray.splice(index, 1);
    localStorage.removeItem('selectedText');
    localStorage.setItem('selectedText', JSON.stringify(selectedTextArray));

    let calledFunctionsArray = JSON.parse(localStorage.getItem('calledFunctions'));
    calledFunctionsArray.splice(index, 1);
    localStorage.removeItem('calledFunctions');
    localStorage.setItem('calledFunctions', JSON.stringify(calledFunctionsArray));

    let selectedArrowArray = JSON.parse(localStorage.getItem('selectedArrow'));
    selectedArrowArray.splice(index, 1);
    localStorage.removeItem('selectedArrow');
    localStorage.setItem('selectedArrow', JSON.stringify(selectedArrowArray));

    let titleArray = JSON.parse(localStorage.getItem('title'));
    titleArray.splice(index, 1);
    localStorage.removeItem('title');
    localStorage.setItem('title', JSON.stringify(titleArray));

    setEmptyLetter(response);
}