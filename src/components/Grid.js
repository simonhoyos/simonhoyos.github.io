import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
`;
