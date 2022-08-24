import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Footer from '../components/common/Footer';
import CreateButton from '../components/common/CreateButton';
import ContentView from '../components/category/ContentView';
const MarketinsidePage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <ContentView category='marketinside'/>
                </Layout>
            <Footer/>
            <CreateButton/>
        </div>
    );
};

export default MarketinsidePage;