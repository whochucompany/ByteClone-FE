import React from 'react';
import styled from 'styled-components';
import Header from "../components/common/Header"
import Layout from '../components/common/Layout';
import SignUp from '../components/login/SignUp';


const SignUpPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <SignUp/>
                </Layout>
        </div>
    );
};

export default SignUpPage;