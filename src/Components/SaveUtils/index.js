import {templatesParams, postLetterStr} from "../../Models/Templates";
import {get} from "../../Models/LetterCreator";

export const handleSaveClick = (templates) => {

    const getLetter = async () => {
        const res = await get();
        return res;
    };

    async function processData() {
        const str = await getLetter();

        const data = {
            'html': str,
        };

        await postLetterStr(data);
    }

    processData();

    // const post = async () => {
    //     await templatesParams(templates);
    // }
    //
    // post();
    alert('Шаблон сохранен!');
}