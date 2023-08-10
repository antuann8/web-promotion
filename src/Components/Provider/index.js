import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [templates, setTemplates] = useState([]);
    const [emptyLetter, setEmptyLetter] = useState(null);
    const [countBlocks, setCountBlocks] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedFontFamily, setSelectedFontFamily] = useState([]);
    const [selectedFontSize, setSelectedFontSize] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedWidth, setSelectedWidth] = useState([]);
    const [selectedHeight, setSelectedHeight] = useState([]);
    const [selectedText, setSelectedText] = useState([]);
    const [calledFunctions, setCalledFunctions] = useState([]);
    const [selectedArrow, setSelectedArrow] = useState([]);
    const [selectedImage, setSelectedImage] = useState([]);
    const [title, setTitle] = useState([]);
    const [fileCounter, setFileCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [templateName, setTemplateName] = useState('');
    const [arrTemplateNames, setArrTemplateNames] = useState([]);

    return (
        <Context.Provider value={{
            templates,
            setTemplates,
            emptyLetter,
            setEmptyLetter,
            countBlocks,
            setCountBlocks,
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
            selectedImage,
            setSelectedImage,
            title,
            setTitle,
            fileCounter,
            setFileCounter,
            showModal,
            setShowModal,
            showSaveModal,
            setShowSaveModal,
            templateName,
            setTemplateName,
            arrTemplateNames,
            setArrTemplateNames,
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;