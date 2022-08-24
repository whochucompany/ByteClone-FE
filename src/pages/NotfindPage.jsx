import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Layout from '../components/common/Layout';
import styled from 'styled-components';
import CreateButton from '../components/common/CreateButton';
const NotfindPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <NotfindDIv>
                        <h1>404</h1>
                        <p>페이지를 찾을 수 없습니다.</p>
                    </NotfindDIv>
                </Layout>
            <Footer/>
            <CreateButton/>
        </div>
    );
};

export default NotfindPage;

const NotfindDIv =styled.div`
    text-align: center;
    padding: 32px 0 56px;
    h1 {
        font-size: 48px;
        line-height: 56px;
        color: #000C2D;
    }
    p{
        font-size: 20px;
        line-height: 32px;
        margin-top: 24px;
        color: #4F525F;
    }
`