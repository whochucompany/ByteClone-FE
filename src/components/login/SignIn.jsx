import React, {useState} from 'react';
import styled from 'styled-components';


import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 

    const onChangeHandler1 = (e) => {
        setEmail(e.target.value);
    }
    const onChangeHandler2 = (e) => {
        setPassword(e.target.value);
    }

    const sendLoginInformation = async (e) => {
        e.preventDefault();
        
    
        const response = await axios.post("http://15.164.170.89/user/login",{
            email: email,
            password: password,
        }
        ,{withCredentials:true})
        console.log("response",response)
        localStorage.setItem("Authorization",response.headers.authorization)
         //localStorage.setItem("Refresh-Token",response.data.data["Refresh-Token"])

        if ( email === "" && password ==="") {
            alert("아이디와 비밀번호를 입력해주세요.")
        }    
        if (response.result === false) {
            alert("아이디와 비밀번호가 맞는지 확인해주세요.")
        }
        else{
            alert("로그인 성공!")
            navigate("/")
            localStorage.setItem("View","member")
            localStorage.setItem("username",response.data.username)
        }
    }    
 

    return (
        <StSignInWrap>
            <StSignInHeader>로그인하기</StSignInHeader>
            <StSignInTextBox
                value = {email}
                onChange = {onChangeHandler1}
                placeholder='이메일 주소를 입력하세요.'
            />

            <StSignInPasswordBox
                type= 'password'
                value = {password}
                onChange = {onChangeHandler2}
                placeholder='비밀번호를 입력하세요.'
            />
            <StSignInButton
                onClick = {sendLoginInformation}
            >이메일로 로그인하기</StSignInButton>

            <StUnderbarBox/>

            <STSignUpBox>아직 가입하지 않았나요? <span><NavLink to="/signup">가입하기</NavLink>
            </span>
            </STSignUpBox>
            <StSignInFooter>Powered by <strong>Bluedot</strong>, 
            Partner of <strong>Mediasphere</strong>
            </StSignInFooter>
        </StSignInWrap>
    );
};

export default SignIn;

const StSignInWrap = styled.div`
    display : flex;
    flex-direction : column;
    text-align : center;
    align-items : center;

    max-width : 300px;
    width : 300px;

    margin-top : 100px;
    margin-left : auto;
    margin-right : auto;

    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 28px;
`
const StSignInHeader = styled.div`
    font-size : 23px;
    font-weight : bold;
    

    color : #000C2D;


    margin-botton : 10px;
`
const StSignInTextBox = styled.input`
    min-width: 250px;
    width : 300px;
    height: 40px;

    background-color : #E2E2E2;

    font-size : 13px;

    margin-top : 32px;
    margin-bottom : 20px;
    padding : 0px;
    text-align : center;

    border-radius: 4px;
    border : none;
    box-shadow: inset 0 1px rgb(0 0 0 / 8%);

`

const StSignInPasswordBox = styled.input`
    min-width: 250px;
    width : 300px;
    height: 40px;

    background-color : #E2E2E2;

    font-size : 13px;

    margin-bottom : 20px;
    padding : 0px;
    text-align : center;

    border-radius: 4px;
    border : none;
    box-shadow: inset 0 1px rgb(0 0 0 / 8%);

`

const StSignInButton = styled.button`
    min-width: 250px;
    width : 100%;
    height: 40px;

    border-radius: 4px;
    border : 0px;

    background-color : black;

    font-size : 13px;
    font-weight : bold;
    color : white;
    cursor: pointer;
`   
const StUnderbarBox = styled.div`
    height : 40px;
    width : 300px;

    margin-bottom : 30px;
    
    border-bottom : 1px solid #c7c7c7; 
`

const STSignUpBox = styled.span`
    font-size : 12px;

    color : #4F525F;

    .signUpLink {
        color : #000C2D;
    
        font-size : 13px;
    }
    span>a{
        color : black;
        text-decoration : none;
        font-weight : bold;
    }
    
    

`
const StSignInFooter = styled.div`

    margin-top : 50px;

    font-size : 11px;
    color: rgba(0,0,0,.5);
    
    strong {
        color : #000C2D;
    }
`


