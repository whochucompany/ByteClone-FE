import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Footer from '../components/common/Footer';
import ContentView from '../components/category/ContentView';
const DailyBytePage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <ContentView category='DAILY_BYTE'/>
                </Layout>
            <Footer/>
        </div>
    );
};

export default DailyBytePage;