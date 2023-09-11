import {postLetterStr, postTemplateName} from "../../Models/Templates";
import {get} from "../../Models/LetterCreator";
import {handleClearAllBlocks} from "../ClearUtils";

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
    selectedConditionOptions,
) => {
    if (templateName === '') {
        alert('Ошибка! Введите корректное значение имени');
    } else if (selectedConditionOptions.length == 0) {
        alert('Ошибка! Выберите хотя бы одно условие');
    } else {
        let conditionData;

        if (selectedConditionOptions.length === 1) {
            conditionData = {
                'conditionId': selectedConditionOptions[0].value,
                'status': 'false',
            };
        } else {
            conditionData = [];
            for (let i = 0; i < selectedConditionOptions.length; i++) {
                conditionData.push({
                    'conditionId': selectedConditionOptions[i].value,
                    'status': 'false',
                });
            }
        }

        const dataName = {
            'name': templateName,
            'conditionData': conditionData,
        };

        const postName = async () => {

            const response = await postTemplateName(dataName);

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

