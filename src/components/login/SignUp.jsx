import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")


    const [doubleCheck, setDoubleCheck] = useState(false)


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
        
        var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (!regEmail.test(email)){
            alert("이메일 주소에 '@'를 포함해 주세요."+email+"에 '@'가 없습니다.")
            setEmail("")
            return
        }
        if (doubleCheck===false){
            alert("이메일 중복검사를 해주시기 바랍니다.")
            return
        }
        
        if (name.length > 10 && name.length < 1){
            alert("닉네임은 1자이상 10자이내로 작성해주세요!")
            console.log({name})
            return
        }        
        if (!regPassword.test(password)){
            alert("비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.")
            setPassword("")
            setPasswordConfirm("")
            return
        }
        if (password !== passwordConfirm){
            alert("비밀번호가 같은지 확인해주세요.")
            setPassword("")
            setPasswordConfirm("")
            return
        }else{
        const response = await axios.post("http://15.164.170.89/user/signup",{ //회원가입
            email,
            username : name,
            password,
            passwordConfirm
        }
        ,{withCredentials:true})
        localStorage.setItem("Authorization",response.data.Authorization)
        localStorage.setItem("Refresh-Token",response.data["Refresh-Token"])

        alert("회원가입에 성공하셨습니다!")
        navigate("/login")
        }
    };
// aa
    const emailDoubleCheck  = async (e) => {
    
        e.preventDefault()

        const response = await axios.get(`http://15.164.170.89/user/emailCheck/${email}`, {
            body : {
                 email : email 
            },
        }
        ,{withCredentials:true})
     
    if (email === ""){
        alert("email를 입력해주세요.")
         return }
    if (response.result === true) {
        alert("중복된 아이디 입니다.")
        setEmail("")
        return
    }
     else {
        alert("사용가능한 아이디 입니다.")
        setDoubleCheck(true)
     }
    };


    return (
        <StSignUpWrap>
            <StSignUpHeader>회원가입하기</StSignUpHeader>
            
            <StEmailWrap>
            <StSignUpEmailBox
                value={email}
                onChange={onChangeHandler1}
                placeholder='이메일 주소를 입력하세요.'
            />

            <StDoubleCheckButtom
                onClick = {emailDoubleCheck}
            >중복확인</StDoubleCheckButtom>

            </StEmailWrap>

            <StSignUpNameBox
                value={name}
                onChange={onChangeHandler2}
                placeholder='이름을 입력하세요.'
            />

            <StSignUpPasswordBox
                type= 'password'
                value={password}
                onChange={onChangeHandler3}
                placeholder='비밀번호를 입력하세요.'
            />

            <StSignUpPasswordConfirmBox
                type= 'password'
                value={passwordConfirm}
                onChange={onChangeHandler4}
                placeholder='비밀번호를 재입력하세요.'
            />

            <StSignUpButton
                onClick={sendRequstLogin}
            >회원가입하기</StSignUpButton>
        
            <StUnderbarBox2/>

            <STSignInBox>이미 가입하셨나요? <span><NavLink to="/login">로그인하기</NavLink>
            </span>
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

    margin-top : 100px;
    margin-botton : 10px;
`

const StEmailWrap = styled.div`
    
`

const StSignUpNameBox = styled.input`
    min-width: 250px;
    width : 300px;
    height: 40px;

    background-color : #E2E2E2;

    font-size : 13px;

    
    margin-bottom : 10px;
    
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

    margin-top : 32px;
    margin-bottom : 10px;
    padding : 0px;
    text-align : center;

    border-radius: 4px;
    border : none;
    box-shadow: inset 0 1px rgb(0 0 0 / 8%);
`
const StDoubleCheckButtom = styled.button`
    cursor: pointer;
    width :100%;
    height: 40px;

    background-color : black;

    color : white;
    font-size : 13px;


    margin-bottom : 10px;
    padding : 0px;
    text-align : center;

    border-radius : 4px;
    border : 0px;   
`

const StSignUpPasswordBox = styled.input`
    min-width: 250px;
    width : 300px;
    height: 40px;

    background-color : #E2E2E2;

    font-size : 13px;

    margin-bottom : 10px;
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

    margin-bottom : 10px;
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
    cursor: pointer;
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
    span>a{
        color : black;
        text-decoration : none;
        font-weight : bold;
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