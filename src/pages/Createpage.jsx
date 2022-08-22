import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Create from '../components/create/Create'

const Createpage = () => {
    return (
        <>
        <Header/>
            <Layout>
                <Create/>
            </Layout>
        <Footer/>
        </>
    );
};

export default Createpage;