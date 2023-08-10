import {postLetterStr} from "../../Models/Templates";
import {get} from "../../Models/LetterCreator";
import {handleClearAllBlocks} from "../ClearUtils";

// export const handleTemplateName = (
//     setTemplates,
//     setEmptyLetter,
//     setSelectedOptions,
//     setSelectedFontFamily,
//     setSelectedFontSize,
//     setSelectedColor,
//     setSelectedWidth,
//     setSelectedHeight,
//     setSelectedText,
//     setCalledFunctions,
//     setSelectedArrow,
//     setSelectedImage,
//     setTitle,
// ) => {
//
// }

export const handleSaveClick = (
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
    templateName,
    setArrTemplateNames,
    setTemplateName,
    setShowSaveModal,
) => {

    const getLetter = async () => {
        const res = await get();
        return res;
    };

    async function processData() {
        const str = await getLetter();

        const data = {
            'html': str,
            'name' : `${templateName}.html`,
        };

        await postLetterStr(data);
    }

    processData();

    setArrTemplateNames((prev) => [...prev, templateName]);
    setTemplateName('');

    alert('Шаблон сохранен!');
    handleClearAllBlocks(
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
        setTitle,)
    setShowSaveModal(false);
}

