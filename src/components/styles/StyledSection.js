import styled from 'styled-components';

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 335px 1fr;
  height: 100vh;

  div:nth-child(2) {
    padding: 0 25px;
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
