import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Modify from '../components/create/Modify';
const ModifyPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <Modify/>
                </Layout>
            <Footer/>
        </div>
    );
};

export default ModifyPage;