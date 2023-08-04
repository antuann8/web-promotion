import React, {useContext, useEffect} from "react";
import SelectBlock from "../SelectBlock";
import InputBlock from "../InputBlock";
import InputBlockText from "../InputBlockText";
import InputBlockArrow from "../InputBlockArrow";
import ClearOneBlockButton from "../ClearOneBlockButton";
import {colors, fonts} from "../../Globals/Constants";
import {Context} from "../../Components/Provider";
import {handleChange} from "../../Components/ParamsUtils";

const LetterRightArrow = ({
                              blockType,
                              index,
                          }) => {

    const {
        setShowModal,
        selectedOptions,
        setSelectedOptions,
        selectedFontFamily,
        setEmptyLetter,
        selectedFontSize,
        setSelectedFontFamily,
        setSelectedFontSize,
        selectedColor,
        setSelectedColor,
        selectedWidth,
        setSelectedWidth,
        selectedHeight,
        setSelectedHeight,
        selectedText,
        setSelectedText,
        selectedArrow,
        setSelectedArrow,} = useContext(Context);

    return (
        <div>
            <InputBlockText
                label="Введите текст блока"
                selectedValue={selectedText[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'text',
                        index,
                        event,
                        setSelectedText,
                        selectedText,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                setShowModal={setShowModal}
                index={index}
            />
            <SelectBlock
                label="Выберите задний фон блока:"
                selectValue={selectedOptions[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'backcolor',
                        index,
                        event,
                        setSelectedOptions,
                        selectedOptions,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                options={colors}
            />
            <SelectBlock
                label="Выберите шрифт текста блока:"
                selectValue={selectedFontFamily[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'fontFamily',
                        index,
                        event,
                        setSelectedFontFamily,
                        selectedFontFamily,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                options={fonts}
            />
            <SelectBlock
                label="Выберите цвет текста блока:"
                selectValue={selectedColor[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'color',
                        index,
                        event,
                        setSelectedColor,
                        selectedColor,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                options={colors}
            />
            <InputBlock
                label="Выберите размер шрифта блока: (min: 2 , max: 80)"
                selectedValue={selectedFontSize[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'fontSize',
                        index,
                        event,
                        setSelectedFontSize,
                        selectedFontSize,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                min={2}
                max={80}
            />
            <InputBlock
                label="Выберите ширину блока: (min: 10 , max: 600)"
                selectedValue={selectedWidth[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'width',
                        index,
                        event,
                        setSelectedWidth,
                        selectedWidth,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                min={10}
                max={600}
            />
            <InputBlock
                label="Выберите величину пространства между строками: (min: 1 , max: 100)"
                selectedValue={selectedHeight[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'height',
                        index,
                        event,
                        setSelectedHeight,
                        selectedHeight,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
                min={1}
                max={100}
            />
            <InputBlockArrow
                label="Введите абсолютную ссылку для отображения изображение в формате (https://example.png/)"
                selectedValue={selectedArrow[index]}
                onChange={(event) => {
                    handleChange(
                        blockType,
                        'arrow',
                        index,
                        event,
                        setSelectedArrow,
                        selectedArrow,
                        selectedOptions[index],
                        setEmptyLetter,
                        selectedFontFamily[index],
                        selectedFontSize[index],
                        selectedColor[index],
                        selectedWidth[index],
                        selectedHeight[index],
                        selectedText[index],
                        selectedArrow[index],
                    );
                }}
            />
            <ClearOneBlockButton index={index}/>
        </div>
    );
}

export default LetterRightArrow;