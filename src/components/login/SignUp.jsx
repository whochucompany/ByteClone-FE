import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const navigate = useNavigate ()

    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+/;
    // BE에서 유효성검사 해줌? 여부에 따라 위 코드 삭제

    const onChangeHandler1 = (e) => {
        setEmail(e.target.value);
    }
    const onChangeHandler2 = (e) => {
        setName(e.target.value);
    }
    const onChangeHandler3 = (e) => {
        setPassword(e.target.value);
    }
    const onChangeHandler4 = (e) => {
        setPasswordConfirm(e.target.value);
    }


    const sendRequstLogin = async (e) => {
        e.preventDefault();
        
            const response = await axios.post("user/signup",{ //회원가입
                username : name,
                email,
                password,
                passwordConfirm

                // api명세서에서 passwordconfirm 저장 하지 않는다 했는데 그럼 FE에서 유효성 검사?
                // id 중복검사 BE에서?
            }
            ,{withCredentials:true})
            localStorage.setItem("Authorization",response.data.data.Authorization)
            localStorage.setItem("Refresh-Token",response.data.data["Refresh-Token"])
            
            if (response === true) {
                alert("login success!")
                navigate("/")
            }else{
                
            }
            
            // setNavigates(true)
            navigate("/")
        // } catch(error){
        //     alert("아이디와 비밀번호를 확인해주세요")
        //     console.log(error)
        // }
        // axios.defaults.headers.common["Authorization"] = `Bearer ${response['token']}`;
    }


    return (
        <StSignUpWrap>
            <StSignUpHeader>회원가입하기</StSignUpHeader>
            <StSignUpNameBox
                value={name}
                onChange={onChangeHandler2}
                placeholder='이름을 입력하세요.'
            />

            <StSignUpEmailBox
                value={email}
                onChange={onChangeHandler1}
                placeholder='이메일 주소를 입력하세요.'
            />

            <StSignUpPasswordBox
                value={password}
                onChange={onChangeHandler3}
                placeholder='비밀번호를 입력하세요.'
            />

            <StSignUpPasswordConfirmBox
                value={password}
                onChange={onChangeHandler4}
                placeholder='비밀번호를 재입력하세요.'
            />

            <StSignUpButton
                onClick={sendRequstLogin}
            >회원가입하기</StSignUpButton>
        
            <StUnderbarBox2/>

            <STSignInBox>이미 가입하셨나요? <NavLink activeclassame="signUpLink" to="/">로그인하기</NavLink>

            </STSignInBox>
            <StSignUpFooter>Powered by <strong>Bluedot</strong>, 
            Partner of <strong>Mediasphere</strong>
            
            </StSignUpFooter>
        </StSignUpWrap>
    );
};

export default SignUp;


const StSignUpWrap = styled.div`
    display : flex;
    flex-direction : column;
    text-align : center;
    align-items : center;

    max-width : 300px;
    width : 300px;

    margin-left : auto;
    margin-right : auto;

    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 28px;
`
const StSignUpHeader = styled.div`
    font-size : 23px;
    font-weight : bold;
    

    color : #000C2D;

    margin-botton : 10px;
`

const StSignUpNameBox = styled.input`
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
const StSignUpEmailBox = styled.input`
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
const StSignUpPasswordBox = styled.input`
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

const StSignUpPasswordConfirmBox = styled.input`
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

const StSignUpButton = styled.button`
    min-width: 250px;
    width : 100%;
    height: 40px;

    border-radius: 4px;
    border : 0px;

    background-color : black;

    font-size : 13px;
    font-weight : bold;
    color : white;
`   
const StUnderbarBox2 = styled.div`
    height : 40px;
    width : 300px;

    margin-bottom : 30px;
    
    border-bottom : 1px solid #c7c7c7; 
`

const STSignInBox = styled.span`
    font-size : 12px;

    color : #4F525F;

    .signUpLink {
        color : #000C2D;
    
        font-size : 13px;
    }
    

`
const StSignUpFooter = styled.div`

    margin-top : 50px;

    font-size : 11px;
    color: rgba(0,0,0,.5);
    
    strong {
        color : #000C2D;
    }
`
