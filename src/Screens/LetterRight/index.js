import React from 'react';
import SelectBlock from '../SelectBlock';
import InputBlock from "../InputBlock";
import ClearOneBlockButton from "../ClearOneBlockButton";
import {handleColorChange} from "../../Components/ParamsUtils";

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
                         clearOneBlock,
                         colors,
                         fonts }) => {
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
                                    );
                                }}
                                min="2"
                                max="80"
                                label="Введите значение шрифта в px (max: 80, min: 2)"
                                unit="px"
                            />
                            <ClearOneBlockButton
                                index={index}
                                clearOneBlock={clearOneBlock}
                                setEmptyLetter={setEmptyLetter}
                                setSelectedOptions={setSelectedOptions}
                                setSelectedFontFamily={setSelectedFontFamily}
                                setSelectedFontSize={setSelectedFontSize}
                                setSelectedColor={setSelectedColor}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LetterRight;
