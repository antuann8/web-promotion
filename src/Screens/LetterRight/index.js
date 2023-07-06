import React from 'react';
import SelectBlock from '../SelectBlock';
import InputBlock from "../InputBlock";
import ClearOneBlockButton from "../ClearOneBlockButton";

const LetterRight = ({ countBlocks, selectedOptions, handleBackColorChange, setSelectedOptions, selectedFontFamily, setEmptyLetter, selectedFontSize, handleFontFamilyChange, setSelectedFontFamily, handleFontSizeChange, setSelectedFontSize, clearOneBlock, colors, fonts }) => {
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
                                        selectedFontSize[index]);
                                }}
                                options={fonts}
                            />
                            <InputBlock
                                index={index}
                                selectedFontSize={selectedFontSize}
                                handleFontSizeChange={handleFontSizeChange}
                                setSelectedFontSize={setSelectedFontSize}
                                selectedFontFamily={selectedFontFamily}
                                selectedOptions={selectedOptions}
                                setEmptyLetter={setEmptyLetter}
                                selectedValue={selectedFontSize[index]}
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
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LetterRight;
