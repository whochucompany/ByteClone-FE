import React from 'react';
import styled from 'styled-components';
const marketinside = () => {
    return (
        <TextDiv>
            <p>시장과 산업에 대한 꼼꼼하고 인사이트 있는 분석!</p>
            <p>&lt;마켓 인사이트&gt;는 시장에 대한 명쾌한 해설을 드립니다.</p>
            <p>BYTE와 함께 시장을 이해하는 안목을 길러보세요.</p>
            <p>매주 화요일에 업데이트 됩니다!</p>
        </TextDiv>
    );
};

export default marketinside;
const TextDiv = styled.div`
    p{
        color :#4F525F;
        font-size: 20px;
        line-height: 32px;
    }
    margin-top: 24px;
`