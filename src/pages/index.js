import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import HomePage from '../modules/home';
import { getAssetPrefix } from '../modules/core/utils';

const { Header, Footer, Content } = Layout;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
`;

const StyledContent = styled(Content)`
  margin-top: 64px;
`;

export default () => (
  <div>
    <Layout>
      <StyledHeader>
        <img src={getAssetPrefix('/images/logo.png')} height="64px" />
      </StyledHeader>
      <StyledContent>
        <HomePage />
      </StyledContent>
      <Footer>Copyright ©2019</Footer>
    </Layout>
  </div>
);
