import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Footer from '../components/common/Footer';
import CreateButton from '../components/common/CreateButton';
import ContentView from '../components/category/ContentView';
const CompanyPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <ContentView category='company'/>
                </Layout>
            <Footer/>
            <CreateButton/>
        </div>
    );
};

export default CompanyPage;