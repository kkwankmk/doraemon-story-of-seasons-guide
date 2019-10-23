import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: #d92139;
  font-weight: 600;
  font-size: 2.5em;
`;

const StyledBorder = styled.div`
  width: 20%;
  border: 2px solid #fec748;
`;

export default ({ title }) => (
  <StyledTitle>
    {title}
    <StyledBorder />
  </StyledTitle>
);
