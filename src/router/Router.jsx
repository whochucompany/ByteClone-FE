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
import SignUpPage from '../pages/SignUpPage';




    const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>            
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/news/DAILY_BYTE' element={<DailyBytePage/>}/>
                <Route path='/news/DEEP_BYTE' element={<DeepBytePage/>}/>
                <Route path='/news/마켓인사이드' element={<MarketinsidePage/>}/>
                <Route path='/news/상식한입' element={<ConceptPage/>}/>
                <Route path='/news/기업한입' element={<CompanyPage/>}/>
                <Route path='/news/브랜드한입' element={<BrandPage/>}/>
                <Route path='/detail/:newId' element={<DetailPage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    };

export default Router;