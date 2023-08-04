import InputBlock from "../InputBlock";
import React, {useContext} from "react";
import ClearOneBlockButton from "../ClearOneBlockButton";
import InputBlockImage from "../InputBlockImage";
import {Context} from "../../Components/Provider";
import {handleChange, handleImageChange} from "../../Components/ParamsUtils";

const LetterRightImage = ({
                              blockType,
                              index,
                          }) => {

    const {
        selectedOptions,
        selectedFontFamily,
        setEmptyLetter,
        selectedFontSize,
        selectedColor,
        selectedWidth,
        setSelectedWidth,
        selectedHeight,
        selectedText,
        selectedArrow,
        setFileCounter,
        fileCounter,} = useContext(Context);

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
            />
        </div>
    );
}

export default LetterRightImage;