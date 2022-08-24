import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DailyByte from './inner/DailyByte';

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
        }/* else if (category === 'DAILY_BYTE') */
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