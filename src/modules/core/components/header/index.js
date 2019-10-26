import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary4};
  text-align: center;
`;

const StyledText = styled.h1`
  color: ${props => props.theme.colors.primary1};
  padding: 60px 0;
  font-size: 3rem;

  @media (max-width: 767px) {
    padding: 30px 0;
    font-size: 1.5rem;
  }
`;

export default ({ text }) => {
  return (
    <Wrapper>
      <StyledText>{text}</StyledText>
    </Wrapper>
  );
};
