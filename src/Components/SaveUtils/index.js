import {postLetterStr} from "../../Models/Templates";
import {get} from "../../Models/LetterCreator";
import {handleClearAllBlocks} from "../ClearUtils";

function pushToLocalStorageArray(key, value) {
    const storedArray = JSON.parse(localStorage.getItem(key)) || [];
    storedArray.push(value);
    localStorage.setItem(key, JSON.stringify(storedArray));
}



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
    arrTemplateNames,
) => {
    if (templateName === '') {
        alert('Ошибка! Введите корректное значение имени');
    } else if (arrTemplateNames.includes(templateName)) {
        alert('Ошибка! Такое название шаблона уже есть, используйте другое');
    } else {
        const getLetter = async () => {
            const res = await get();
            return res;
        };

        async function processData() {
            const str = await getLetter();

            const data = {
                'html': str,
                'name': `${templateName}.html`,
            };

            await postLetterStr(data);
        }

        processData();

        setArrTemplateNames((prev) => [...prev, templateName]);
        pushToLocalStorageArray('templateNames', templateName);
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
}

