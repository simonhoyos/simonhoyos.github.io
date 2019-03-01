import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  background: #fdfdfd;
  padding: 0 5px 25px;
  max-width: 100vw;

  @media screen and (min-width: 960px) {
    grid-column-start: 2;
    min-height: 100vh;
    max-width: calc(100vw - 250px);
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
`;

export function Section({ children }) {
  return (
    <StyledSection>
      <Container>
        {children}
      </Container>
    </StyledSection>
  );
}
