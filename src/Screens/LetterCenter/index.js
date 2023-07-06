import React from 'react';

const LetterCenter = ({ emptyLetter }) => {
    return (
        <div className="letter__redactor-center">
            {emptyLetter ? (
                <span className='letter__reset' dangerouslySetInnerHTML={{ __html: emptyLetter }}></span>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default LetterCenter;
