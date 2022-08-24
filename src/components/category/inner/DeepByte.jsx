import React from 'react';
import styled from 'styled-components';

const DeepByte = () => {
    return (
        <TextDiv>
            <p>이번 주 가장 중요한 경제 이슈는 무엇일까요?</p>
            <p>&lt;DEEP BYTE&gt;에서 BYTE 편집장의 깊고 자세한 분석으로</p>
            <p>가장 핫한 경제 이슈를 완벽하게 마스터해보세요.</p>
            <p>&lt;DEEP BYTE&gt;는 매주 월요일에 업데이트 됩니다!</p>
        </TextDiv>
    );
};

export default DeepByte;

const TextDiv = styled.div`
    p{
        color :#4F525F;
        font-size: 20px;
        line-height: 32px;
    }
    margin-top: 24px;
`