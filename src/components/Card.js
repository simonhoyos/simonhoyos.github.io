import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import giphy from '../assets/giphy.gif';

const StyledCard = styled.article`
  width: 350px;
  height: auto;
  box-shadow: 1px 1px 3px 1px lightgray;
  border-radius: 10px;
  position: relative;
  background: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: ${props => props.imageSize || 'cover'};
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #f5f5f5;
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

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const SubTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: #bfbfbf;
`;

const ChangeImage = styled.div`
  &:hover {
    .static {
      display: none;
    }
  }
`;

export function Card({ title, description, image, imageSize, subtitle, icons }) {
  return (
    <StyledCard>
      <ChangeImage>
        <Image className="static" src={image.src} alt={image.alt} imageSize={image.size} />
      </ChangeImage>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <p>{description}</p>
        <Icons>
          {icons.map(({ url, icon }) => (
            <IconContainer key={`${url}_${icon}`}>
              <a href={url} rel="noopener noreferrer" target="_blank">
                <Icon icon={icon} />
              </a>
            </IconContainer>
          ))}
        </Icons>
      </Content>
    </StyledCard>
  )
}
