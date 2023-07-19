import { useEffect } from 'react';

const useLocalStorageSaver = (
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
                               setTitle
                           ) => {
    useEffect(() => {
        // При монтировании компонента восстанавливаем состояние из localStorage
        const savedSelectedOptions = localStorage.getItem('selectedOptions');
        if (savedSelectedOptions) {
            setSelectedOptions(JSON.parse(savedSelectedOptions));
        }

        const savedSelectedFontFamily = localStorage.getItem('selectedFontFamily');
        if (savedSelectedFontFamily) {
            setSelectedFontFamily(JSON.parse(savedSelectedFontFamily));
        }

        const savedSelectedFontSize = localStorage.getItem('selectedFontSize');
        if (savedSelectedFontSize) {
            setSelectedFontSize(JSON.parse(savedSelectedFontSize));
        }

        const savedSelectedColor = localStorage.getItem('selectedColor');
        if (savedSelectedColor) {
            setSelectedColor(JSON.parse(savedSelectedColor));
        }

        const savedSelectedWidth = localStorage.getItem('selectedWidth');
        if (savedSelectedWidth) {
            setSelectedWidth(JSON.parse(savedSelectedWidth));
        }

        const savedSelectedHeight = localStorage.getItem('selectedHeight');
        if (savedSelectedHeight) {
            setSelectedHeight(JSON.parse(savedSelectedHeight));
        }

        const savedSelectedText = localStorage.getItem('selectedText');
        if (savedSelectedText) {
            setSelectedText(JSON.parse(savedSelectedText));
        }

        const savedCalledFunctions = localStorage.getItem('calledFunctions');
        if (savedCalledFunctions) {
            setCalledFunctions(JSON.parse(savedCalledFunctions));
        }

        const savedSelectedArrow = localStorage.getItem('selectedArrow');
        if (savedSelectedArrow) {
            setSelectedArrow(JSON.parse(savedSelectedArrow));
        }

        const savedSelectedImage = localStorage.getItem('selectedImage');
        if (savedSelectedImage) {
            setSelectedImage(JSON.parse(savedSelectedImage));
        }

        const savedTitle = localStorage.getItem('title');
        if (savedTitle) {
            setTitle(JSON.parse(savedTitle));
        }
    }, []);

    useEffect(() => {
        // Каждый раз, когда состояние изменяется, сохраняем его в localStorage
        localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    }, [selectedOptions]);

    useEffect(() => {
        localStorage.setItem('selectedFontFamily', JSON.stringify(selectedFontFamily));
    }, [selectedFontFamily]);

    useEffect(() => {
        localStorage.setItem('selectedFontSize', JSON.stringify(selectedFontSize));
    }, [selectedFontSize]);

    useEffect(() => {
        localStorage.setItem('selectedColor', JSON.stringify(selectedColor));
    }, [selectedColor]);

    useEffect(() => {
        localStorage.setItem('selectedWidth', JSON.stringify(selectedWidth));
    }, [selectedWidth]);

    useEffect(() => {
        localStorage.setItem('selectedHeight', JSON.stringify(selectedHeight));
    }, [selectedHeight]);

    useEffect(() => {
        localStorage.setItem('selectedText', JSON.stringify(selectedText));
    }, [selectedText]);

    useEffect(() => {
        localStorage.setItem('calledFunctions', JSON.stringify(calledFunctions));
    }, [calledFunctions]);

    useEffect(() => {
        localStorage.setItem('selectedArrow', JSON.stringify(selectedArrow));
    }, [selectedArrow]);

    useEffect(() => {
        localStorage.setItem('selectedImage', JSON.stringify(selectedImage));
    }, [selectedImage]);

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(title));
    }, [title]);

    return null;
};

export default useLocalStorageSaver;
