import React, {useContext} from 'react';
import LetterRightText from "../LetterRightText";
import LetterRightArrow from "../LetterRightArrow";
import CollapsibleBlock from "../CollapsibleBlock";

const LetterRight = ({
                    setCalledFunctions,
                    calledFunctions,
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
                        <CollapsibleBlock title="Блок №" index={index + 1}>
                            {
                                calledFunctions[index] === 'createBlock' ? <LetterRightText
                                    blockType="text"
                                    calledFunctions={calledFunctions}
                                    setCalledFunctions={setCalledFunctions}
                                    selectedOptions={selectedOptions}
                                    handleChange={handleChange}
                                    setSelectedOptions={setSelectedOptions}
                                    selectedFontFamily={selectedFontFamily}
                                    setEmptyLetter={setEmptyLetter}
                                    selectedFontSize={selectedFontSize}
                                    setSelectedFontFamily={setSelectedFontFamily}
                                    setSelectedFontSize={setSelectedFontSize}
                                    selectedColor={selectedColor}
                                    setSelectedColor={setSelectedColor}
                                    selectedWidth={selectedWidth}
                                    setSelectedWidth={setSelectedWidth}
                                    selectedHeight={selectedHeight}
                                    setSelectedHeight={setSelectedHeight}
                                    selectedText={selectedText}
                                    setSelectedText={setSelectedText}
                                    index={index}
                                    clearOneBlock={clearOneBlock}
                                    colors={colors}
                                    fonts={fonts}
                                /> : <LetterRightArrow
                                    blockType="arrow"
                                    calledFunctions={calledFunctions}
                                    setCalledFunctions={setCalledFunctions}
                                    selectedOptions={selectedOptions}
                                    handleChange={handleChange}
                                    setSelectedOptions={setSelectedOptions}
                                    selectedFontFamily={selectedFontFamily}
                                    setEmptyLetter={setEmptyLetter}
                                    selectedFontSize={selectedFontSize}
                                    setSelectedFontFamily={setSelectedFontFamily}
                                    setSelectedFontSize={setSelectedFontSize}
                                    selectedColor={selectedColor}
                                    setSelectedColor={setSelectedColor}
                                    selectedWidth={selectedWidth}
                                    setSelectedWidth={setSelectedWidth}
                                    selectedHeight={selectedHeight}
                                    setSelectedHeight={setSelectedHeight}
                                    selectedText={selectedText}
                                    setSelectedText={setSelectedText}
                                    index={index}
                                    clearOneBlock={clearOneBlock}
                                    colors={colors}
                                    fonts={fonts}
                                    />
                                    // : calledFunctions[index] === 'createArrowBlock' ?
                                    // <LetterRightArrow
                                    //     // setIndex={setIndex}
                                    //     index={index}
                                    // />
                                    // :
                                    // <LetterRightArrow
                                    //     // setIndex={setIndex}
                                    //     index={index}
                                    // />
                            }
                        </CollapsibleBlock>
                    </div>
                ))
            }
        </div>
    );
};

export default LetterRight;