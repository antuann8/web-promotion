import { useEffect } from 'react';

// constants
import {colors, fonts} from '../../Globals/Constants/index'

const useUpdateBlockSettings = (
    countBlocks,
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
                        ) => {

    const startFontSize = "10";
    const startWidth = "600";
    const startHeight = "200";

    useEffect(() => {
        if (selectedFontFamily.length < countBlocks) {
            setSelectedFontFamily(prevSelectedFontFamily => [...prevSelectedFontFamily, fonts["1"]]);
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
};

export default useUpdateBlockSettings;
