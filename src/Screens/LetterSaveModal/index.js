import React, {useContext, useEffect, useState} from 'react';

// styles, photos
import {Context} from "../../Components/Provider";
import {handleChange} from "../../Components/ParamsUtils";
import {handleSaveClick} from "../../Components/SaveUtils";

// plugins
import Select from 'react-select';

// models
import {getMailingConditions} from "./../../Models/Mailing"

const LetterSaveModal = () => {

    const [conditions, setConditions] = useState([]);
    const [selectedConditionOptions, setSelectedConditionOptions] = useState([]);

    const {
        setShowSaveModal,
        setTemplateName,
        templateName,
        setTemplates,
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
        setEmptyLetter,
        arrTemplateNames,
        setArrTemplateNames,
    } = useContext(Context);

    const handleSelectChange = (selectedOptions) => {
        setSelectedConditionOptions(selectedOptions);
    };

    const handleChange = (e) => {
        setTemplateName(e.target.value);
    }

    useEffect(() => {
        const getConditions = async () => {
            const res = await getMailingConditions();
            setConditions(res);
        }
        getConditions();
    }, [])

    const options = conditions.map((item, index) => ({
        value: item._id,
        label: item.name,
    }));

    return (
        <div className='letter__redactor__save__modal'>
            <h1 className='education__condition__header-save'>Настройка шаблона</h1>
            <div className='center'>
                <h2 className='education__header-save'>Введите название</h2>
                <div className='center'>
                    <input
                        placeholder='Введите название...'
                        className="letter__redactor__description-save-button-input-modal"
                        type="text"
                        onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <h2 className='education__header-save'>Выберите условие(-я) рассылки</h2>
                <Select
                    className="letter__redactor__select__condition"
                    isMulti
                    options={options}
                    onChange={handleSelectChange}
                    value={selectedConditionOptions}
                    placeholder="Выберите..."
                />
            </div>
            <button onClick={() => {handleSaveClick(
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
                )}}
                    className='letter__redactor__button-left-save-modal left'
                    type="submit">
                Сохранить шаблон
            </button>
            <button className="letter__redactor__button-left-save-modal education__closed-button" onClick={() => setShowSaveModal(false)}>
                Вернуться назад
            </button>
        </div>
    );
};

export default LetterSaveModal;
