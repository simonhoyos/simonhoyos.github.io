import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 1em 0;

  h3 {
    text-transform: capitalize;
    margin: 0;
  }

  span {
    font-size: 0.8rem;
    font-weight: bold;
    color: #bfbfbf;
  }
`;

export function SectionHeader({ children }) {
  return (
    <StyledHeader>
      <h3>{children}</h3>
      <span>Scroll >> to View More</span>
    </StyledHeader>
  );
}
