import React from 'react';
import CreateButton from '../components/common/CreateButton';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import MainBanner from '../components/main/MainBanner';
import MainBoard from '../components/main/MainBoard';

const MainPage = () => {
    
    return (
        <div>
            <Header/>
               <MainBanner/>
               <MainBoard/>
            <Footer/>
            <CreateButton/>
        </div>
    );
};

export default MainPage;