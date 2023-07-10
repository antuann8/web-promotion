import React from 'react';
import SelectBlock from '../SelectBlock';
import InputBlock from "../InputBlock";
import InputBlockText from "../InputBlockText";
import ClearOneBlockButton from "../ClearOneBlockButton";

const LetterRight = ({
                    countBlocks,
                    selectedOptions,
                    handleChange,
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
                                    handleChange(
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
                                label="Выберите высоту блока: (min: 10 , max: 1000)"
                                selectedValue={selectedHeight[index]}
                                onChange={(event) => {
                                    handleChange(
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
                                min={10}
                                max={1000}
                            />
                            <InputBlockText
                                label="Введите текст блока:"
                                selectedValue={selectedText[index]}
                                onChange={(event) => {
                                    handleChange(
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
