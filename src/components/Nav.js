import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100vh;
  width: 250px;
  margin: 0;
  padding: 0;
  position: fixed;

  ul {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    list-style-type: none;
    height: 60px;
    margin: 0;
    padding: 10px;
    width: 100%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0;

    &:after {
      width: calc(100% - 200px);
      height: 1px;
      background-color: #333;
      content: '';
      position: absolute;
      bottom: 0;
      left: 100px;
    }
  }

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

export function Nav() {
  return (
    <StyledNav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="blog">Blog</a></li>
      </ul>
    </StyledNav>
  );
}
