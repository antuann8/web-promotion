import React, {useContext} from 'react';
import LetterRightText from "../LetterRightText";
import LetterRightArrow from "../LetterRightArrow";
import CollapsibleBlock from "../CollapsibleBlock";
import LetterRightImage from "../LetterRightImage";
import {Context} from "../../Components/Provider";

const LetterRight = () => {

    const {title, calledFunctions, countBlocks} = useContext(Context);

    return (
        <div className='letter__redactor-right'>
            <h2>Управление блоками ({countBlocks})</h2>
            {
                Array.from({ length: countBlocks }, (_, index) => (
                    <div key={index}>
                        <CollapsibleBlock title={title[index]} index={index + 1}>
                            {
                                calledFunctions[index] === 'createBlock' ?
                                    <LetterRightText
                                        blockType="text"
                                        index={index}
                                /> : calledFunctions[index] === 'createArrowBlock' ?
                                    <LetterRightArrow
                                        blockType="arrow"
                                        index={index}
                                    />
                                    : calledFunctions[index] === 'createImageBlock' ?
                                    <LetterRightImage
                                        blockType="image"
                                        index={index}
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