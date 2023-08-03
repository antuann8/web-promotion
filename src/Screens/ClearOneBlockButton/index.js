import React, {useContext} from 'react';
import {Context} from "../../Components/Provider";

const ClearOneBlockButton = ({
                        index,
                        clearOneBlock,
                        setEmptyLetter,
                        selectedOptions,
                        setSelectedOptions,
                        selectedFontFamily,
                        setSelectedFontFamily,
                        selectedFontSize,
                        setSelectedFontSize,
                        selectedColor,
                        setSelectedColor,
                        selectedWidth,
                        setSelectedWidth,
                        selectedHeight,
                        setSelectedHeight,
                        selectedText,
                        setSelectedText,
                        calledFunctions,
                        setCalledFunctions,
                        selectedArrow,
                        setSelectedArrow,
                        title,
                        setTitle,
                                }) => {

    const {setTemplates} = useContext(Context);

    return (
        <div>
            <button className="letter__redactor__button-right" onClick={() => clearOneBlock(
                setTemplates,
                index,
                setEmptyLetter,
                selectedOptions,
                setSelectedOptions,
                selectedFontFamily,
                setSelectedFontFamily,
                selectedFontSize,
                setSelectedFontSize,
                selectedColor,
                setSelectedColor,
                selectedWidth,
                setSelectedWidth,
                selectedHeight,
                setSelectedHeight,
                selectedText,
                setSelectedText,
                calledFunctions,
                setCalledFunctions,
                selectedArrow,
                setSelectedArrow,
                title,
                setTitle,
            )}>Удалить блок</button>
        </div>
    );
};

export default ClearOneBlockButton;
