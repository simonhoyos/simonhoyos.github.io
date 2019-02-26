import React from 'react';
import styled from 'styled-components';
import stairs from '../assets/stairs.jpg';

const Card = styled.article`
  width: 350px;
  height: auto;
  box-shadow: 1px 1px 3px 1px lightgrey;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

export function ProjectCard() {
  return (
    <Card>
      <Image src={stairs} alt=""/>
      <Content>
        <h3>Project Card</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quasi, ut totam placeat labore</p>
      </Content>
    </Card>
  )
}
