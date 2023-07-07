import React from 'react';
import SelectBlock from '../SelectBlock';
import InputBlock from "../InputBlock";
import InputBlockText from "../InputBlockText";
import ClearOneBlockButton from "../ClearOneBlockButton";

const LetterRight = ({
                    countBlocks,
                    selectedOptions,
                    handleBackColorChange,
                    setSelectedOptions,
                    selectedFontFamily,
                    setEmptyLetter,
                    selectedFontSize,
                    handleFontFamilyChange,
                    setSelectedFontFamily,
                    handleFontSizeChange,
                    setSelectedFontSize,
                    selectedColor,
                    setSelectedColor,
                    handleColorChange,
                    selectedWidth,
                    setSelectedWidth,
                    handleWidthChange,
                    selectedHeight,
                    setSelectedHeight,
                    handleHeightChange,
                    selectedText,
                    setSelectedText,
                    handleTextChange,
                    clearOneBlock,
                    colors,
                    fonts
}) => {
    return (
        <div className='letter__redactor-right'>
            <h2>Управление блоками ({countBlocks})</h2>
            {
                Array.from({ length: countBlocks }, (_, index) => (
                    <div key={index}>
                        <h3>Блок №{index + 1}</h3>
                        <div>
                            <SelectBlock
                                label="Выберите задний фон блока:"
                                selectValue={selectedOptions[index]}
                                onChange={(event) => {
                                    handleBackColorChange(
                                        index,
                                        event,
                                        setSelectedOptions,
                                        selectedOptions,
                                        selectedFontFamily[index],
                                        setEmptyLetter,
                                        selectedFontSize[index],
                                        selectedColor[index],
                                        selectedWidth[index],
                                        selectedHeight[index],
                                        selectedText[index],
                                    );
                                }}
                                options={colors}
                            />
                            <SelectBlock
                                label="Выберите шрифт текста блока:"
                                selectValue={selectedFontFamily[index]}
                                onChange={(event) => {
                                    handleFontFamilyChange(
                                        index,
                                        event,
                                        setSelectedFontFamily,
                                        selectedFontFamily,
                                        selectedOptions[index],
                                        setEmptyLetter,
                                        selectedFontSize[index],
                                        selectedColor[index],
                                        selectedWidth[index],
                                        selectedHeight[index],
                                        selectedText[index],
                                    );
                                }}
                                options={fonts}
                            />
                            <SelectBlock
                                label="Выберите цвет текста блока:"
                                selectValue={selectedColor[index]}
                                onChange={(event) => {
                                    handleColorChange(
                                        index,
                                        event,
                                        setSelectedColor,
                                        selectedColor,
                                        selectedFontFamily[index],
                                        setEmptyLetter,
                                        selectedFontSize[index],
                                        selectedOptions[index],
                                        selectedWidth[index],
                                        selectedHeight[index],
                                        selectedText[index],
                                    );
                                }}
                                options={colors}
                            />
                            <InputBlock
                                selectedValue={selectedFontSize[index]}
                                onChange={(event) => {
                                    handleFontSizeChange(
                                        index,
                                        event,
                                        setSelectedFontSize,
                                        selectedFontSize,
                                        selectedFontFamily[index],
                                        selectedOptions[index],
                                        setEmptyLetter,
                                        selectedColor[index],
                                        selectedWidth[index],
                                        selectedHeight[index],
                                        selectedText[index],
                                    );
                                }}
                                min="2"
                                max="80"
                                label="Введите значение шрифта в px (max: 80, min: 2)"
                                unit="px"
                            />
                            <InputBlock
                                selectedValue={selectedWidth[index]}
                                onChange={(event) => {
                                    handleWidthChange(
                                        index,
                                        event,
                                        setSelectedWidth,
                                        selectedWidth,
                                        selectedFontFamily[index],
                                        selectedOptions[index],
                                        setEmptyLetter,
                                        selectedColor[index],
                                        selectedFontSize[index],
                                        selectedHeight[index],
                                        selectedText[index],
                                    );
                                }}
                                min="10"
                                max="600"
                                label="Введите значение ширины блока в px (max: 600, min: 10)"
                            />
                            <InputBlock
                                selectedValue={selectedHeight[index]}
                                onChange={(event) => {
                                    handleHeightChange(
                                        index,
                                        event,
                                        setSelectedHeight,
                                        selectedHeight,
                                        selectedFontFamily[index],
                                        selectedOptions[index],
                                        setEmptyLetter,
                                        selectedColor[index],
                                        selectedFontSize[index],
                                        selectedWidth[index],
                                        selectedText[index],
                                    );
                                }}
                                min="10"
                                max="1000"
                                label="Введите значение высоты блока в px (max: 1000, min: 10)"
                                unit="px"
                            />
                            <InputBlockText
                                selectedValue={selectedText[index]}
                                onChange={(event) => {
                                    handleTextChange(
                                        index,
                                        event,
                                        setSelectedText,
                                        selectedText,
                                        selectedFontFamily[index],
                                        selectedOptions[index],
                                        setEmptyLetter,
                                        selectedColor[index],
                                        selectedFontSize[index],
                                        selectedWidth[index],
                                        selectedHeight[index],
                                    );
                                }}
                                label="Введите текст"
                            />
                            <ClearOneBlockButton
                                index={index}
                                clearOneBlock={clearOneBlock}
                                setEmptyLetter={setEmptyLetter}
                                setSelectedOptions={setSelectedOptions}
                                setSelectedFontFamily={setSelectedFontFamily}
                                setSelectedFontSize={setSelectedFontSize}
                                setSelectedColor={setSelectedColor}
                                setSelectedWidth={setSelectedWidth}
                                setSelectedHeight={setSelectedHeight}
                                setSelectedText={setSelectedText}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LetterRight;
