import React from 'react';
import styled from 'styled-components';
import Header from "../components/common/Header"
import Layout from '../components/common/Layout';
import SignUp from '../components/login/SignUp';
import Footer from '../components/common/Footer';


const SignUpPage = () => {
    return (
        <div>
            <Header/>
                <Layout>
                    <SignUp/>
                </Layout>
                <Footer/>
        </div>
    );
};

export default SignUpPage;