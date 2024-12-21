import React, { useState, useEffect } from 'react';

const TypingEffect2 = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;

        const updateText = () => {
            if (isDeleting) {
                setDisplayText(prev => prev.slice(0, -1));
                if (displayText === '') {
                    setIsDeleting(false);
                }
            } else {
                setDisplayText(prev => text.slice(0, prev.length + 1));
                if (displayText === text) {
                    setTimeout(() => setIsDeleting(true), 1000);  
                }
            }
        };

        if (isDeleting) {
            timer = setTimeout(updateText, speed / 2);
        } else {
            timer = setTimeout(updateText, speed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, text, speed]);

    return (
        <span className="ubuntu-bold gradient-text">{displayText}</span>
    );
};

export default TypingEffect2;