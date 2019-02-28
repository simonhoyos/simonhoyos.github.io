import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const StyledCard = styled.article`
  width: 350px;
  height: auto;
  box-shadow: 1px 1px 3px 1px lightgrey;
  border-radius: 10px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: ${props => props.imageSize || 'cover'};
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 10px 0;
  margin-bottom: 60px;
`;

const Icons = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const IconContainer = styled.li`
  list-style-type: none;
  height: 60px;
  margin: 0;
  padding: 10px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  display: inline-block;
  width: 60px;

  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export function Card({ title, description, image, website, imageSize }) {
  return (
    <StyledCard>
      <Image src={image.src} alt={image.alt} imageSize={imageSize} />
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <Icons>
          <IconContainer>
            <a href={website} rel="noopener noreferrer" target="_blank">
              <Icon icon="world" />
            </a>
          </IconContainer>
        </Icons>
      </Content>
    </StyledCard>
  )
}
