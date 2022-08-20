import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import SignIn from '../components/login/SignIn';

const LoginPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <SignIn/>
                </Layout>
        </div>
    );
};

export default LoginPage;