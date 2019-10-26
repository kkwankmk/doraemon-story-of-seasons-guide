import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.primary2};
  font-weight: 600;
  font-size: 2.5rem;
`;

const StyledBorder = styled.div`
  width: 20%;
  border: 2px solid ${props => props.theme.colors.primary1};
`;

export default ({ title }) => (
  <StyledTitle>
    {title}
    <StyledBorder />
  </StyledTitle>
);
