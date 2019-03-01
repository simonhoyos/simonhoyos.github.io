import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollAnimation = keyframes`
  0% {
    margin-left: 0;
    letter-spacing: 0;
  }

  50% {
    margin-left: 2px;
    letter-spacing: 2px;
  }

  100% {
    margin-left: 0;
    letter-spacing: 0;
  }
`;

const StyledHeader = styled.div`
  margin: 1em 0;

  h3 {
    text-transform: capitalize;
    margin: 0;
  }
`;

const Scroll = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #bfbfbf;

  span {
    animation: ${ScrollAnimation} .5s linear infinite;
  }
`;

export function SectionHeader({ children, isScrollable }) {
  return (
    <StyledHeader>
      <h3>{children}</h3>
      {isScrollable && <Scroll>Scroll to View More <span>>>></span></Scroll>}
    </StyledHeader>
  );
}
