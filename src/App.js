import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
//import "../Assets/reset.css";
import "./Assets/reset.css";
import Home from "./Components/Home";
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
import GlobalStyle from './Theme/globalStyle.js';


export default function App(){

    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}