import React from 'react';
import styled from 'styled-components';
const concept = () => {
    return (
        <TextDiv>
            <p>BYTE 구독자에게 꼭 필요한 시사 상식은 뭘까?</p>
            <p>&lt;상식 한입+&gt;는 핵심 개념을 쉽게 설명합니다.</p>
            <p>개념 정의와 관련 이슈까지 한 번에 정리하세요.</p>
            <p>매주 수요일에 업데이트 됩니다!</p>
        </TextDiv>
    );
};

export default concept;
const TextDiv = styled.div`
    p{
        color :#4F525F;
        font-size: 20px;
        line-height: 32px;
    }
    margin-top: 24px;
`