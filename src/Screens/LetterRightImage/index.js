import InputBlock from "../InputBlock";
import React from "react";
import ClearOneBlockButton from "../ClearOneBlockButton";
import InputBlockImage from "../InputBlockImage";

const LetterRightImage = ({
                              blockType,
                              calledFunctions,
                              setCalledFunctions,
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
                              title,
                              setTitle,
                              clearOneBlock,
                              index,
                          }) => {

    return (
        <div>
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
            <InputBlockImage
                label="Загрузите изображение"
                onChange={(event) => {
                    handleImageChange(
                        index,
                        event,
                        setEmptyLetter,
                        setFileCounter,
                        fileCounter,
                        selectedWidth[index],
                    );
                }}
            />
            <ClearOneBlockButton
                index={index}
                clearOneBlock={clearOneBlock}
                setEmptyLetter={setEmptyLetter}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                selectedFontFamily={selectedFontFamily}
                setSelectedFontFamily={setSelectedFontFamily}
                selectedFontSize={selectedFontSize}
                setSelectedFontSize={setSelectedFontSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedWidth={selectedWidth}
                setSelectedWidth={setSelectedWidth}
                selectedHeight={selectedHeight}
                setSelectedHeight={setSelectedHeight}
                selectedText={selectedText}
                setSelectedText={setSelectedText}
                setCalledFunctions={setCalledFunctions}
                calledFunctions={calledFunctions}
                selectedArrow={selectedArrow}
                setSelectedArrow={setSelectedArrow}
                title={title}
                setTitle={setTitle}
            />
        </div>
    );
}

export default LetterRightImage;