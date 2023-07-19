import React, { useState } from 'react';

const CollapsibleBlock = ({ title, children, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h3 onClick={() => setIsOpen(!isOpen)}>
                {index + '. ' + title }
                <span
                    style={{
                        marginLeft: '20px',
                        width: '20px',
                        height: '20px',
                        display: 'inline-block',
                    }}
                >
                {isOpen ? '▲' : '▼'}
                </span>
            </h3>
            {isOpen && children}
        </div>
    );
};

export default CollapsibleBlock;
