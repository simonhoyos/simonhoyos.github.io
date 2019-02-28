import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProfilePicture } from '../components/ProfilePicture';
import { Icon } from "./Icon";

const StyledNav = styled.nav`
  min-height: 100vh;
  width: 250px;
  margin: 0;
  padding: 0;
  display: none;

  @media screen and (min-width: 960px) {
    display: block;
  }

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
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0;
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

  .nav li {
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

  .social {
    display: flex;
    justify-content: space-around;
  }

  .social li {
    display: inline-block;
    width: 25%;
  }
`;

export function Nav() {
  return (
    <StyledNav>
      <ProfilePicture />
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <ul className="social">
        <li>
          <a href="https://www.github.com/simonhoyos" rel="noopener noreferrer" target="_blank">
            <Icon icon="github" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/simonhoyosdev" rel="noopener noreferrer" target="_blank">
            <Icon icon="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.medium.com/@simonhoyos" rel="noopener noreferrer" target="_blank">
            <Icon icon="medium" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/simonhoyos" rel="noopener noreferrer" target="_blank">
            <Icon icon="linkedin" />
          </a>
        </li>
      </ul>
    </StyledNav>
  );
}
