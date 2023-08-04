import SelectBlock from "../SelectBlock";
import InputBlock from "../InputBlock";
import InputBlockText from "../InputBlockText";
import ClearOneBlockButton from "../ClearOneBlockButton";
import React, {useContext, useEffect} from "react";
import {colors, fonts} from "../../Globals/Constants";
import {handleChange} from "../../Components/ParamsUtils";
import {Context} from "../../Components/Provider";

const LetterRightText = ({
                             blockType,
                             index,
                         }) => {

    const {setShowModal,
        setSelectedOptions,
        selectedOptions,
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
        setSelectedText, } = useContext(Context);

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
                    );
                }}
                index={index}
                setShowModal={setShowModal}
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
                        selectedText[index]
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
                        selectedText[index]
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
                        selectedText[index]
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
                        selectedText[index]
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
                        selectedText[index]
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
                        selectedText[index]
                    );
                }}
                min={1}
                max={100}
            />
            <ClearOneBlockButton
                index={index}
            />
        </div>
    );
}

export default LetterRightText;