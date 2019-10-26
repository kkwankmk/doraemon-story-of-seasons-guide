import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import { getAssetPrefix } from '../../utils';

const { Header, Footer, Content } = Layout;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
`;

const StyledContent = styled(Content)`
  margin-top: 64px;
  margin-bottom: 72px;
`;

const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 100%;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export default ({ children }) => (
  <StyledLayout>
    <StyledHeader>
      <a href={getAssetPrefix('/')}>
        <img src={getAssetPrefix('/images/logo.png')} height="64px" />
      </a>
    </StyledHeader>
    <StyledContent>{children}</StyledContent>
    <StyledFooter>Copyright ©2019</StyledFooter>
  </StyledLayout>
);
