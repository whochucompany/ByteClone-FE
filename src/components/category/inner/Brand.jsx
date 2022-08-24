import React from 'react';
import styled from 'styled-components';
const brand = () => {
    return (
        <TextDiv>
            <p>요즘 핫한 브랜드들은 어떻게 만들어졌을까?</p>
            <p>&lt;브랜드 한입&gt;에서 유명 브랜드의 A to Z를 알아보세요.</p>
            <p>내가 아는 브랜드의 역사부터 전략과 최근 이슈까지!</p>
            <p>매주 금요일에 업데이트 됩니다.</p>
        </TextDiv>
    );
};

export default brand;
const TextDiv = styled.div`
    p{
        color :#4F525F;
        font-size: 20px;
        line-height: 32px;
    }
    margin-top: 24px;
`