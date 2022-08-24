import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import Layout from './Layout';
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Logout from '../login/Logout';




const Header = () => {

    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate("/");
      };

    return (
        <Navigator>
            <Layout>
                <StHeader>
                <div>
                    <img src={logo} alt="로고" onClick={onClickHandler} />
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>DAILY BYTE</li>
                        <li>DEEP BYTE</li>
                        <li>마켓인사이드</li>
                        <li>상식한입</li>
                        <li>기업한입</li>
                        <li>브랜드한입</li>
                        <li>Shop</li>
                        <li><Logout/></li>

                        
                        <li>유료 구독하기</li>
                        <li>무료 뉴스레터 구독</li>
                        <li><FontAwesomeIcon icon={faMoon} /></li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    </ul>
                </div>
                </StHeader>
            </Layout>
        </Navigator>
    );
};


export default Header;

const Navigator = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.lightmode.color_white};
    padding: 24px 0 ;
`

const StHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    >div:first-of-type{
        width: 20%;
        img{
            max-height: 32px;
            cursor: pointer;
        }
    }
    >div:last-of-type{
        width: 80%;
        ul{
             display: flex;
             justify-content: space-between;
             -webkit-box-align: center;
             li:nth-last-of-type(4){
                background-color: #00cca5;
                color:#fff;
                padding:0 16px;
                line-height: 24px;
                border-radius: 20px;
                &:hover{
                    background-color:  ${(props) => props.theme.lightmode.color_dark};
                    color: #fff;
                }
             }
             li:nth-last-of-type(3){
                background-color:  ${(props) => props.theme.lightmode.color_brand};
                color:#fff;
                padding:0 16px;
                line-height: 24px;
                border-radius: 20px;
                &:hover{
                    background-color:  ${(props) => props.theme.lightmode.color_dark};
                    color: #fff;
                }
             }
             li{
                font-size: 12px;
                font-weight: 500;
                white-space: nowrap;
                letter-spacing: .5px;
                transition: all .3s;
                padding: 4px 0;
                &:hover{
                    color:  ${(props) => props.theme.lightmode.color_brand};
                }
             }
             li:nth-last-of-type(1),li:nth-last-of-type(2) {
                color:#000;
             }
            
        }
    } 
`