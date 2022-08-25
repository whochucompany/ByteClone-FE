import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Logout = () => {

    const Authorization = localStorage.getItem('Authorization');
    const navigate = useNavigate();
    const onLogin= async() => {
        const contest = window.confirm("정말 로그아웃 하실건가요?");
        if(contest === true){
            const Refreshtoken = localStorage.getItem('RefreshToken');
            const headers = {
                'Content-Type': 'application/json',
                RefreshToken: Refreshtoken
            }
            await axios.delete("http://15.164.170.89/user/logout",
                {headers:headers},{})

            window.localStorage.clear();
            alert('로그아웃 되셨습니다.')
            navigate("/")
        }
        else if(contest === false){
            return
        }
    }
    return (
        <div>
            { Authorization ===null ?
            <LoginDiv><NavLink to = "/login">로그인하기</NavLink></LoginDiv>
            :
            <LoginDiv
            className='logout_button'
            onClick={onLogin}>
            로그아웃 하기
            </LoginDiv>
        }
        </div>
    );
};

export default Logout;

const LoginDiv = styled.div `
    text-decoration: none;
    a{
        text-decoration: none;
        color: #000c2d;
        transition: all .3s;
        &:hover{
            color:  ${(props) => props.theme.lightmode.color_brand};
        }
    }
    cursor: pointer;
`