import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: 800px) {
    grid-column-start: 2;
    min-height: 100vh;
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