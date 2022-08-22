import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Footer = () => {
    return (
        <div>
        <Layout>

        <StFooterTopContainer>
        <StFooterTopWrap>
              <ByteFooterImg src="https://mydailybyte.com/assets/img/byte_footer/logo-black.png" />
                <div>
                (주)바이트컴퍼니 / 대표 : 김태헌 / 사업자등록번호: 679-86-02171
                </div>
                <div>
                주소: 서울시 구로구 디지털로 300, 1228호 (지밸리비즈플라자)
                </div>
                <div>
                광고/기타 문의 : byteteam365@gmail.com
                </div>
        </StFooterTopWrap>

        <StFooterSideImgBox>
                <StFooterSideImg src = "https://mydailybyte.com/assets/img/byte_footer/ins_icon.png"/>
                <StFooterSideImg src = "https://mydailybyte.com/assets/img/byte_footer/f_icon.png"/>
                <StFooterSideImg src = "https://mydailybyte.com/assets/img/byte_footer/k_icon.png"/>
        </StFooterSideImgBox>
        </StFooterTopContainer>
        </Layout>
        <Layout>
          

        <StFooterBottomWrap>
            <div className = "footer_bottom_top">
            이용약관 개인정보처리방침
            </div>  

            <StFooterBottomContent>
            <div>
            (주)미디어스피어 대표 이성규 사업자번호 : 178-86-02187
            </div>
            <div>
            오피스 : 서울시 용산구 한강대로 366, 6층(트윈시티 남산) 오피스동 651호
            </div>
            <div>
            파트너 문의 : partner@mediasphere.kr 기업구독 문의 : help@mediasphere.kr 파트너 가입신청
            </div>
            </StFooterBottomContent>
            <div className = "last_text">
            개인정보보호 책임자 : 김경달 통신판매업번호 제2021-서울용산-0579호
            </div>
            <StFooterBottomImg src = "https://storage.googleapis.com/cdn.media.bluedot.so/img/220621/powered.png"/>
        </StFooterBottomWrap>
        </Layout>

        </div>
        
    );
};

export default Footer;

const StFooterTopContainer =styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-between;

    margin-top : 80px;
    
    color : #333333;
    background-color: #eaeaea;
`

const StFooterSideImg =styled.img`
    width : 30px;

    margin-top : 5px;
    margin-bottom : 5px;
`
const StFooterTopWrap = styled.div`
    display : flex;
    flex-direction : column;
    

    width : 50%;

    
    padding :25px;
    
    font-size: .83rem;
    font-weight : bold;
    line-height: 1.9;
    
    

`
const ByteFooterImg = styled.img`
    width : 140px;
    height : 20px;

    margin-bottom : 25px;
`
const StFooterSideImgBox = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    
    width : 20px;
    
    margin-right : 50px;
`

const StFooterBottomWrap = styled.div`

    padding : 25px;
    margin-top : 10px;

    color : #4F525F;
    font-size : 13px;
    line-height: 1.9;

    .footer_bottom_top {
        border-bottom : 1px solid #eaeaea;
        padding-bottom : 15px;
        margin-bottom 8px;

        color : #000C2D;
        font-size : 13px;
    }
    .last_text {
        margin-top : 8px;
        margin-bottom : 8px;
    }
`

const StFooterBottomContent = styled.div`
    margin-top : 20px;    
`

const StFooterBottomImg = styled.img`
    margin-top : 10px;

    width:104px;
    height : 22px;
`
