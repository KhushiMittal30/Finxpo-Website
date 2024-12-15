import React, { useState, useEffect } from 'react';

const TypingEffect1 = ({ text, speed }) => {
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
        <span className="text-sm sm:text-center text-gray-400">{displayText}</span>
    );
};

export default TypingEffect1;