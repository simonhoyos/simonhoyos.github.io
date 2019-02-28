import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-flow: column;
`;
