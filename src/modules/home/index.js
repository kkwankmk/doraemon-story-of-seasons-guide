import React from 'react';
import styled from 'styled-components';

import PageContent from '../core/components/pageContent';
import PageTitle from '../core/components/pageTitle';
import CardMenu from './cardMenu';

const Cover = styled.div`
  background: url('/images/doraemon_cover.jpg') center no-repeat;
  background-size: cover;
  position: relative;
  height: 88vh;
`;

export default () => {
  return (
    <>
      <Cover />
      <PageContent>
        <>
          <PageTitle title="Introduction" />
          Doraemon Story of Seasons is Harvest Moon rebranded. A very popular farming game. Expand
          your farm by growing crops, raising livestock, fishing and selling pretty much everything
          you find. We'll guide you through all the mechanics of the game and help you get started.
          Feel free to contact us through private messages or by leaving a comment. This guide is a
          work in progress and it will be updated regularly.
        </>

        <CardMenu />
      </PageContent>
    </>
  );
};
