import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage';


    const Router = () => {
    return (
        <BrowserRouter>
            <Routes>            
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    };

export default Router;