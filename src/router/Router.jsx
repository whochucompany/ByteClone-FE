import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import GuestPage from '../pages/GuestPage'
import MemberPage from '../pages/MemberPage'
import DetailPage from '../pages/DetailPage'
import CreatePage from '../pages/CreatePage'
import SignUpPage from '../pages/SignUpPage';




    const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>            
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/tag/news' element={<GuestPage/>}/>
                <Route path='/tag/deepbyte' element={<MemberPage/>}/>
                <Route path='/tag/:postId' element={<DetailPage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    };

export default Router;