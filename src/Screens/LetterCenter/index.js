import React, {useContext} from 'react';
import {Context} from "../../Components/Provider";

const LetterCenter = () => {

    const {emptyLetter} = useContext(Context);

    return (
        <>
        <div className="letter__redactor-center">
            {emptyLetter ? (
                <span className='letter__reset' dangerouslySetInnerHTML={{ __html: emptyLetter }}></span>
            ) : (
                <div>Loading...</div>
            )}
        </div>
        </>
    );
};

export default LetterCenter;
