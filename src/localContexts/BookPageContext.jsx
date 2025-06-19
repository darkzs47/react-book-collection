import {createContext, useContext, useEffect, useState} from "react";

const BookPageContext = createContext(null);

export const useBookPageContext = () => useContext(BookPageContext);

export const BookPageProvider = ({bookId, children}) => {
    const storageKey = `book-settings-${bookId}`;

    const loadSettings = () => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            fontSize: 'medium',
            fontStyle: 'normal',
            textColor: 'black',
        };
    };

    const initialSettings = loadSettings();

    const [fontSize, setFontSize] = useState(initialSettings.fontSize);
    const [fontStyle, setFontStyle] = useState(initialSettings.fontStyle);
    const [textColor, setTextColor] = useState(initialSettings.textColor);

    useEffect(() => {
        localStorage.setItem(
            storageKey,
            JSON.stringify({fontSize, fontStyle, textColor})
        );
    }, [fontSize, fontStyle, textColor, storageKey]);

    return (
        <BookPageContext.Provider value={{
            fontSize,
            fontStyle,
            textColor,
            setFontSize,
            setTextColor,
            setFontStyle,
        }}>
            {children}
        </BookPageContext.Provider>
    )
}