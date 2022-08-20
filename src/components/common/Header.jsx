import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StHeader>
            헤더헤더
        </StHeader>
    );
};

export default Header;

const StHeader = styled.div`
    width : 100%;
    height : 50px;

    font-size : 30px;
    
    background-color : black;
`