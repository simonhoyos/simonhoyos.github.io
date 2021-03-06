import React from 'react';
import styled from 'styled-components';
import simon from '../assets/simon.JPG';

const Container = styled.div`
  width: 200px;
  flex-basis: 335px;
  height: 200px;
  margin: 50px auto 20px;
`;

const Image = styled.img`
  width: 100%;
  height:100%;
  border-radius: 50%;
  object-fit: cover;
`;

export function ProfilePicture() {
  return (
    <Container>
      <Image src={simon} alt="Simon Hoyos"/>
    </Container>
  );
}
