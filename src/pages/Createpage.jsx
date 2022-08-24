import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Create from '../components/create/Create';
import Footer from '../components/common/Footer';

const CreatePage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <Create/>
                </Layout>
            <Footer/>
        </div>
    );
};

export default CreatePage;