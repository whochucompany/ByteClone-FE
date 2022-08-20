import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'


    const Router = () => {
    return (
        <BrowserRouter>
            <Routes>            
                <Route path='/' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    };

export default Router;