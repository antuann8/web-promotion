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
                              selectedImage,
                              setSelectedImage,
                              handleImageChange,

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
                // selectedValue={selectedWidth[index]}
                onChange={(event) => {
                    handleImageChange(
                        index,
                        event,
                        setEmptyLetter,
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
                setCalledFunctions={setCalledFunctions}
                calledFunctions={calledFunctions}
                setSelectedArrow={setSelectedArrow}
            />
        </div>
    );
}

export default LetterRightImage;