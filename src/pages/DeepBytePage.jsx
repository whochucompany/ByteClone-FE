import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Footer from '../components/common/Footer';
import CreateButton from '../components/common/CreateButton';
import ContentView from '../components/category/ContentView';
const DeepBytePage = () => {
    //접속하자마자 로컬스토리지에 view = guest 로 하고, 로그인 되면 view = member 로 세팅 하고<
    return (
        <div>
            <Header/>
                <Layout>
                 <ContentView category='DEEP_BYTE'/>
                </Layout>
            <Footer/>
            <CreateButton/>
        </div>
    );
};

export default DeepBytePage;