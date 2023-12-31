import {useContext, useEffect} from 'react';

// constants
import {colors, fonts} from '../../Globals/Constants/index'
import {Context} from "../Provider";

const useUpdateBlockSettings = () => {

    const {countBlocks,
        selectedFontFamily,
        setSelectedFontFamily,
        selectedFontSize,
        setSelectedFontSize,
        selectedOptions,
        setSelectedOptions,
        selectedColor,
        setSelectedColor,
        selectedWidth,
        setSelectedWidth,
        selectedHeight,
        setSelectedHeight,
        selectedText,
        setSelectedText,
        selectedArrow,
        setSelectedArrow, } = useContext(Context);

    const startFontSize = "10";
    const startWidth = "600";
    const startHeight = "30";
    const startText = "Измените текст, фон блока, фон текста в управлении блоком";
    const startArrow = "#";

    useEffect(() => {
        if (selectedFontFamily.length < countBlocks) {
            setSelectedFontFamily(prevSelectedFontFamily => [...prevSelectedFontFamily, fonts["Arial, Helvetica, sans-serif"]]);
        }
    }, [countBlocks, selectedFontFamily]);

    useEffect(() => {
        if (selectedFontSize.length < countBlocks) {
            setSelectedFontSize(prevSelectedFontSize => [...prevSelectedFontSize, startFontSize]);
        }
    }, [countBlocks, selectedFontSize]);

    useEffect(() => {
        if (selectedOptions.length < countBlocks) {
            setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, colors['Зеленый']]);
        }
    }, [countBlocks, selectedOptions]);

    useEffect(() => {
        if (selectedColor.length < countBlocks) {
            setSelectedColor(prevSelectedColor => [...prevSelectedColor, colors['Черный']]);
        }
    }, [countBlocks, selectedColor]);

    useEffect(() => {
        if (selectedWidth.length < countBlocks) {
            setSelectedWidth(prevSelectedWidth => [...prevSelectedWidth, startWidth]);
        }
    }, [countBlocks, selectedWidth]);

    useEffect(() => {
        if (selectedHeight.length < countBlocks) {
            setSelectedHeight(prevSelectedHeight => [...prevSelectedHeight, startHeight]);
        }
    }, [countBlocks, selectedHeight]);

    useEffect(() => {
        if (selectedText.length < countBlocks) {
            setSelectedText(prevSelectedText => [...prevSelectedText, startText]);
        }
    }, [countBlocks, selectedText]);

    useEffect(() => {
        if (selectedArrow.length < countBlocks) {
            setSelectedArrow(prevSelectedArrow => [...prevSelectedArrow, startArrow]);
        }
    }, [countBlocks, selectedArrow]);
};

export default useUpdateBlockSettings;
