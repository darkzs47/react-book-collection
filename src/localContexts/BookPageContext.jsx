import {createContext, useContext, useState} from "react";

const BookPageContext = createContext(null);

export const useBookPageContext = () => useContext(BookPageContext);

export const BookPageProvider = ({children}) => {
    const [fontSize, setFontSize] = useState('medium');
    const [textColor, setTextColor] = useState('black');
    const [fontStyle, setFontStyle] = useState('normal');

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