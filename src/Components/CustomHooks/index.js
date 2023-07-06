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
                        ) => {
    useEffect(() => {
        if (selectedFontFamily.length < countBlocks) {
            setSelectedFontFamily(prevSelectedFontFamily => [...prevSelectedFontFamily, fonts["1"]]);
        }
    }, [countBlocks, selectedFontFamily]);

    useEffect(() => {
        if (selectedFontSize.length < countBlocks) {
            setSelectedFontSize(prevSelectedFontSize => [...prevSelectedFontSize, "10"]);
        }
    }, [countBlocks, selectedFontSize]);

    useEffect(() => {
        if (selectedOptions.length < countBlocks) {
            setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, colors['Зеленый']]);
        }
    }, [countBlocks, selectedOptions]);
};

export default useUpdateBlockSettings;
