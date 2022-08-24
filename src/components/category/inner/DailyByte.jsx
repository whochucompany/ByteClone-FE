import React from 'react';
import styled from 'styled-components';

const DailyByte = () => {
    return (
        <TextDiv>
            <p>BYTEE 들이 꼭 알아야할 오늘의 핵심 뉴스는 뭘까?</p>
            <p>&lt;DAILY BYTE&gt;에는 무료 뉴스레터 DAILY BYTE의</p>
            <p>뉴스 기사가 매일 2개씩 업데이트 됩니다.</p>
            <p>최신 이슈에 대한 넓고 깊은 이해를 얻어가세요!</p>
            <p>&lt;DAILY BYTE&gt;는 매일 아침 6시 업데이트 됩니다!</p>
        </TextDiv>
    );
};

export default DailyByte;

const TextDiv = styled.div`
    p{
        color :#4F525F;
        font-size: 20px;
        line-height: 32px;
    }
    margin-top: 24px;
`