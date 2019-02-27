import styled from 'styled-components';

export const StyledSection = styled.section`
  display: grid;

  @media screen and (min-width: 800px) {
    grid-column-start: 2;
    grid-template-columns: 335px 1fr;
    min-height: 100vh;
  }

  & > div:nth-child(2) {
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
