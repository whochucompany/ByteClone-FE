// components/Layout.jsx
import React from 'react';
import styled from 'styled-components';

const Layout = ({children}) => {
  return (
    <StLayout>
      {children}
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
  max-width: 1400px;
  min-width: 500px;
  margin: 0 auto;
  @media screen and (max-width: 500px){
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
`