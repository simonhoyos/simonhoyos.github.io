import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';

const StyledContainer = styled.div`
  display: grid;

  @media screen and (min-width: 960px) {
    grid-template-columns: 250px auto;
  }
`;

export function Container({ children }) {
  return (
    <StyledContainer>
      <Nav />
      {children}
    </StyledContainer>
  );
}
