import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {

    const auth = window.localStorage.getItem("Authorization")
    const token = localStorage.getItem("Refresh-Token")

    const onLogin= async() => {

        const response = await axios.get("/user/logout",{
            headers:{
              "Refresh-Token": token
            }
          })

        window.localStorage.clear();
    }
    return (
        <div>
            { auth ===null ?
            <div><NavLink to = "/login">로그인하기</NavLink></div>
            :
            <div
            className='logout_button'
            onClick={onLogin}>
            로그아웃 하기
            </div>
        }
        </div>
    );
};

export default Logout;
