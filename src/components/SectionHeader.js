import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 1em 0;

  h3 {
    text-transform: capitalize;
    margin: 0;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #bfbfbf;
  }
`;

export function SectionHeader({ children, isScrollable }) {
  return (
    <StyledHeader>
      <h3>{children}</h3>
      {isScrollable && <span>Scroll >> to View More</span>}
    </StyledHeader>
  );
}
