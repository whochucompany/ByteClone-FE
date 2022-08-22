import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Create from '../components/create/Create';

const CreatePage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <Create/>
                </Layout>
        </div>
    );
};

export default CreatePage;