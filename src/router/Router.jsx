import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import DailyBytePage from '../pages/DailyBytePage'
import DeepBytePage from '../pages/DeepBytePage'
import MarketinsidePage from '../pages/MarketinsidePage'
import ConceptPage from '../pages/ConceptPage'
import CompanyPage from '../pages/CompanyPage'
import BrandPage from '../pages/BrandPage'
import DetailPage from '../pages/DetailPage'
import CreatePage from '../pages/CreatePage'
import ModifyPage from '../pages/ModifyPage'
import SignUpPage from '../pages/SignUpPage'
import NotfindPage from '../pages/NotfindPage'




    const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>            
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/news/DAILY_BYTE' element={<DailyBytePage/>}/>
                <Route path='/news/DEEP_BYTE' element={<DeepBytePage/>}/>
                <Route path='/news/marketinside' element={<MarketinsidePage/>}/>
                <Route path='/news/concept' element={<ConceptPage/>}/>
                <Route path='/news/company' element={<CompanyPage/>}/>
                <Route path='/news/brand' element={<BrandPage/>}/>
                <Route path='/detail/:newsId' element={<DetailPage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
                <Route path='/modify/:newsId' element={<ModifyPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='*' element={<NotfindPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    };

export default Router;