import {postLetterStr, postTemplateName} from "../../Models/Templates";
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
    } else {

        const dataName = {
            'name' : templateName,
        }


        const postName = async () => {

            const response = await postTemplateName(dataName);
            console.log(response);

            if (response.status === 200) {

                const str = await get();

                const data = {
                    'html': str,
                    'name': `${templateName}.html`,
                };

                await postLetterStr(data);

                await alert('Шаблон создан!');

                await setShowSaveModal(false);

                await handleClearAllBlocks(
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

            } else if (response.status === 409) {
                alert('Ошибка! Такое название шаблона уже есть, используйте другое');
            } else {
                alert('Произошла ошибка! Шаблон не создан');
            }
        }
        postName();

        }
}

