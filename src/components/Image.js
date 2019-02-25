import React from 'react';
import styled from 'styled-components';
import stairs from '../assets/stairs.jpg';
import { UnsplashRefLink } from "./UnsplashRefLink";

const Container = styled.div`
  width: 335px;
  flex-basis: 335px;
  height: 335px;
  margin-top: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height:100%;
`;

export function Image() {
  return (
    <Container>
      <StyledImage src={stairs} alt="stairs"/>
      <UnsplashRefLink />
    </Container>
  );
}
