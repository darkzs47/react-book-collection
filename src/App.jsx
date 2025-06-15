import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {lightGreen, common} from '@mui/material/colors';
import Book from './Pages/Book.jsx'
import Settings from './Pages/Settings.jsx'
import Main from "./Pages/Main.jsx";
import Header from "./Components/Header.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: common.black
        },
        secondary: {
            main: lightGreen['A400']
        },
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/book/:id" element={<Book/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>

            </Router>
        </ThemeProvider>
    )
}

export default App
