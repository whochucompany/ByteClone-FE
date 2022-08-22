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
  width: 1400px;
  min-width: 300px;
  margin: 0 auto;
  padding-top: 100px;
`