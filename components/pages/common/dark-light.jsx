"use client"
import { useState } from 'react';

export default function SwitchTab({ addClass }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDark = () => {
        setIsDarkMode(true);
        document.body.classList.add('dark-mode');
    };
    const toggleLight = () => {
        setIsDarkMode(false);
        document.body.classList.remove('dark-mode');
    };

    return (
        <div className="switch__tab">
            <span className={`switch__tab-btn light-mode-title ${isDarkMode ? '' : 'active'}`} onClick={toggleLight}>Light</span>
            <span className={`mode__switch ${addClass}`} onClick={isDarkMode ? toggleLight : toggleDark}><span></span></span>
            <span className={`switch__tab-btn dark-mode-title ${isDarkMode ? 'active' : ''}`} onClick={toggleDark}>Dark</span>
        </div>
    );
}
