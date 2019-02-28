import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const StyledCard = styled.article`
  width: 350px;
  height: auto;
  box-shadow: 1px 1px 3px 1px lightgrey;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

export function Card({ title, description, image, website }) {
  return (
    <StyledCard>
      <Image src={image.src} alt={image.alt} />
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={website} rel="noopener noreferrer" target="_blank">
          <Icon icon="world" />
        </a>
      </Content>
    </StyledCard>
  )
}
