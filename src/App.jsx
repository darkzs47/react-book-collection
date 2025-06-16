import React, {useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Book from './Pages/Book.jsx'
import Settings from './Pages/Settings.jsx'
import Main from "./Pages/Main.jsx";
import Header from "./Layouts/Header.jsx";
import {useSelector} from "react-redux";

function App() {
    const theme = useSelector((state) => state.theme.mode);

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
            <Router>

                <Header/>

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/book/:id" element={<Book/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>

            </Router>
    )
}

export default App
