import React from 'react';
import Layout from '../common/Layout';
import byte_w from '../../assets/img/byte_w.png'
import main from '../../assets/img/main.svg'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons"

const MainBanner = () => {
    return (
        <MainBannerDiv>
            <div className='banner_top'>
                <Layout>
                    <p>지금 <span>41,276</span> 명이 BYTE와 함께 똑똑해지는 중이에요!</p>
                </Layout>
            </div>
            <Layout>
                <div className='banner'>
                    <div className='banner_left'>
                        <h3>최신 비즈니스와 시장에 대한<br/>가장 완벽한 가이드, BYTE+</h3>
                        <p>BYTE+에서는 매주 가장 핫한 비즈니스·경제 토픽을 <span> 5개의 콘텐츠</span>로 정리해드립니다.<br/><br/>
                        토픽 소개부터 시장 분석, 시사상식 그리고 기업분석으로 이어지는 BYTE+의 커리큘럼으로<br/>
                        최근 가장 핫한 비즈니스·경제 이슈에 대한 완벽한 인사이트를 얻어가세요!</p>
                        <div>
                            <p> <img src={byte_w} alt="" /> <span> 유료 멤버십 가입하기</span></p>
                            <p><FontAwesomeIcon icon={faNewspaper} /> <span> 무료 뉴스레터 구독하기 </span></p>
                        </div>
                    </div>
                    <div className='banner_right'>
                        <p>BYTE+</p>
                        <img src={main} alt="" />
                    </div>
                </div>
            </Layout>
        </MainBannerDiv>
    );
};

export default MainBanner;

const MainBannerDiv = styled.div`
    background-color: #000;
    color: #fff;
    .banner_top{
        background-color: rgba(255,255,255,.35);
        height: 44px;
        text-align: center;
        p{
            line-height: 44px;
            font-weight: 500;
            font-size: 16px;
            span{
                color:#00deb4
            }
        }
    }
    .banner{
        display: flex;
        padding: 80px 0;
        box-sizing: border-box;
        margin-bottom: 40px;
        .banner_left{
            border-right: 1px solid #7e7e7e;
            flex-grow: 1;
            h3 {
                color: #00baf0;
                font-weight: 900;
                font-size: 32px;
                line-height: 50px;
                margin-bottom: 35px;
            }
            p{
                font-size: 16px;
                line-height: 26px;
                span{
                    font-weight: 700;
                    color:#00deb4
                }
            }
            >div {
                margin-top: 40px;
                display: flex;
                align-items: center;
                p:first-of-type{
                    display: flex;
                    align-items: center;
                    background-image: linear-gradient(to left,#00a6d7,#00deb4);
                    padding: 0 40px;
                    line-height: 42px;
                    border-radius: 30px;
                    cursor: pointer;
                    img {
                        margin-right: 4px;
                        height: 15px;
                    }
                    span{
                        color:#fff;
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
                p:last-of-type{
                    margin-left: 26px;
                    padding: 0 40px;
                    line-height: 42px;
                    border-radius: 30px;
                    border: 1px solid #fff;
                    background-color: #1f1f1f;
                    cursor: pointer;
                    span {
                        margin-left: 5px;
                        font-size: 15px;
                        font-weight: 500;
                        color:#fff;
                    }
                }
            }
        }
        .banner_right{
            flex-grow: 4;
            text-align: center;
            p{  
                margin: 0 auto 25px;
                width: 55px;
                height: 33px;
                line-height: 31px;
                padding: 0 26px;
                text-align: center;
                color: #000;
                background: #00c8a2;
                font-size: 18px;
                font-weight: 700;
                border-radius: 30px;
            }
            img{
                width: 280px;
            }
        }
    }
`