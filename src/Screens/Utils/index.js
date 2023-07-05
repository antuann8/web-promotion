import {
    get,
    getCountBlocks,
    addBlock,
    clearAllBlocks,
    clearBlock,
    changeFontFamily,
    changeBackColor,
    changeFontSize
} from "../../Models/LetterCreator"

export const getBlocksCount = async (setCountBlocks) => {
    const res = await getCountBlocks();
    setCountBlocks(res);
};

export const getUpdateLetter = async (setEmptyLetter) => {
    const res = await get();
    setEmptyLetter(res);
};

export const handleClearAllBlocks = async (setEmptyLetter,
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

export const createBlock = async (setEmptyLetter) => {

    const data = {
        backcolor: '#00ff00',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '10px',
    };
    // Отправить POST-запрос
    await addBlock(data);

    await getUpdateLetter(setEmptyLetter);
};


export const clearOneBlock = async (index,
                                    setEmptyLetter,
                                    setSelectedOptions,
                                    setSelectedFontFamily,
                                    setSelectedFontSize
                                                            ) => {

    const data = index;

    // Отправить POST-запрос
    const response = await clearBlock(data);

    // Обновить пустое письмо с результатом POST-запроса
    setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter((_, i) => i !== index));
    setSelectedFontFamily(prevSelectedFontFamily => prevSelectedFontFamily.map((item, i) => i === index ? 'Arial, Helvetica, sans-serif' : item));
    setSelectedFontSize(prevSelectedFontSize => prevSelectedFontSize.filter((_, i) => i !== index));
    setEmptyLetter(response);
}

export const handleBackColorChange = async (index,
                                            event,
                                            setSelectedOptions,
                                            selectedOptions,
                                            fontFamily,
                                            setEmptyLetter,
                                            fontSize
                                                        ) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);

    const updateFontSize = fontSize + 'px';
    // Отправка данных на сервер
    const data = {
        'backcolor' : event.target.value,
        'index' : index,
        'fontFamily' : fontFamily,
        'fontSize' : updateFontSize,
    }
    await changeBackColor(data);
    await getUpdateLetter(setEmptyLetter);
};


export const handleFontFamilyChange = async (index,
                                             event,
                                             setSelectedFontFamily,
                                             selectedFontFamily,
                                             backcolor,
                                             setEmptyLetter,
                                             fontSize
                                                                ) => {
    const newSelectedOptions = [...selectedFontFamily];
    newSelectedOptions[index] = event.target.value;
    setSelectedFontFamily(newSelectedOptions);

    const updateFontSize = fontSize + 'px';
    // Отправка данных на сервер
    const data = {
        'fontFamily' : event.target.value,
        'index' : index,
        'backcolor' : backcolor,
        'fontSize' : updateFontSize,
    }
    await changeFontFamily(data);
    await getUpdateLetter(setEmptyLetter);
};

export const handleFontSizeChange = async (index,
                                           event,
                                           setSelectedFontSize,
                                           selectedFontSize,
                                           fontFamily,
                                           backcolor,
                                           setEmptyLetter
                                                                ) => {

    const newSelectedOptions = [...selectedFontSize];
    newSelectedOptions[index] = event.target.value;
    setSelectedFontSize(newSelectedOptions);

    let fontSize = event.target.value;
    if (fontSize >= 2 && fontSize <= 80) {
       fontSize = event.target.value + 'px';
    } else {
        fontSize = '10px';
    }

    const data = {
        'fontFamily' : fontFamily,
        'index' : index,
        'backcolor' : backcolor,
        'fontSize' : fontSize,
    }

    await changeFontSize(data);
    await getUpdateLetter(setEmptyLetter);

};