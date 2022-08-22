import React from 'react';
import DetailView from '../components/detail/DetailView';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
const DetailPage = () => {
    return (
        <div>
            <Header/>
            <Layout>
                <DetailView/>
            </Layout>
            <Footer/>
        </div>
    );
};

export default DetailPage;