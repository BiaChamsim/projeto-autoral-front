import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
            </Routes>

        </BrowserRouter>
    )
}