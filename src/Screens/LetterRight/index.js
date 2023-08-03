import React from 'react';
import LetterRightText from "../LetterRightText";
import LetterRightArrow from "../LetterRightArrow";
import CollapsibleBlock from "../CollapsibleBlock";
import LetterRightImage from "../LetterRightImage";

const LetterRight = ({
                    showModal,
                    setShowModal,
                    title,
                    setTitle,
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
                    selectedArrow,
                    setSelectedArrow,
                    handleImageChange,
                    setFileCounter,
                    fileCounter,
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
                        <CollapsibleBlock title={title[index]} index={index + 1}>
                            {
                                calledFunctions[index] === 'createBlock' ? <LetterRightText
                                    showModal={showModal}
                                    setShowModal={setShowModal}
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
                                    selectedArrow={selectedArrow}
                                    setSelectedArrow={setSelectedArrow}
                                    title={title}
                                    setTitle={setTitle}
                                    index={index}
                                    clearOneBlock={clearOneBlock}
                                    colors={colors}
                                    fonts={fonts}
                                /> : calledFunctions[index] === 'createArrowBlock' ?
                                    <LetterRightArrow
                                showModal={showModal}
                                setShowModal={setShowModal}
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
                                selectedArrow={selectedArrow}
                                setSelectedArrow={setSelectedArrow}
                                index={index}
                                title={title}
                                setTitle={setTitle}
                                clearOneBlock={clearOneBlock}
                                colors={colors}
                                fonts={fonts}
                                    />
                                    : calledFunctions[index] === 'createImageBlock' ?
                                    <LetterRightImage
                                        blockType="image"
                                        selectedWidth={selectedWidth}
                                        setSelectedWidth={setSelectedWidth}
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
                                        selectedHeight={selectedHeight}
                                        setSelectedHeight={setSelectedHeight}
                                        selectedText={selectedText}
                                        setSelectedText={setSelectedText}
                                        selectedArrow={selectedArrow}
                                        setSelectedArrow={setSelectedArrow}
                                        handleImageChange={handleImageChange}
                                        setFileCounter={setFileCounter}
                                        title={title}
                                        setTitle={setTitle}
                                        fileCounter={fileCounter}
                                        index={index}
                                        clearOneBlock={clearOneBlock}
                                    /> : null
                            }
                        </CollapsibleBlock>
                    </div>
                ))
            }
        </div>
    );
};

export default LetterRight;