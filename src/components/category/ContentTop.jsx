import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DailyByte from './inner/DailyByte';
import DeepByte from './inner/DeepByte';
import Marketinside from './inner/Marketinside';
import Concept from './inner/Concept';
import Company from './inner/Company';
import Brand from './inner/Brand';

const ContentTop = ({category}) => {
    const [topContent, setTopContent] = useState('');
    const categoryName = () => {
    switch(category){
        case 'DAILY_BYTE' :
            return setTopContent('DAILY BYTE');
        case 'DEEP_BYTE' :
            return setTopContent('DEEP BYTE');
        case 'marketinside' :
            return setTopContent('마켓인사이드');
        case 'concept' :
            return setTopContent('상식 한입');
        case 'company' :
            return setTopContent('기업 한입');
        case 'brand' :
            return setTopContent('브랜드 한입');
        default:
            return null;
     }
    }
    
    useEffect(()=>{
        categoryName()
    },[])

    const inner = (category) => {
        if (category === 'DAILY_BYTE'){
            return <DailyByte/>
        }else if (category === 'DEEP_BYTE'){
            return <DeepByte/>
        }else if (category === 'marketinside'){
            return <Marketinside/>
        }else if (category === 'concept'){
            return <Concept/>
        }else if (category === 'company'){
            return <Company/>
        }else if (category === 'brand'){
            return <Brand/>
        }
        
    }

    console.log(topContent)

    return (
        <TopContentDiv>
            <h1> {topContent} </h1>
            {inner(category)}
        </TopContentDiv>
    );
};

export default ContentTop;

const TopContentDiv = styled.div`
    text-align: center;
    padding: 32px 0 56px;
    h1{
        font-size: 48px;
        line-height: 56px;
        font-weight: 800;
    }
`