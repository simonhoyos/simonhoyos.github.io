import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProfilePicture } from '../components/ProfilePicture';
import { Icon } from "./Icon";

const StyledNav = styled.nav`
  height: ${props => props.shown ? '100vh' : '50px'};
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background: #fff;
  overflow: auto;
  transition: all 0.5s ease-in-out;
  box-shadow: 1px 0 3px 1px lightgray;

  @media screen and (min-width: 960px) {
    min-height: 100vh;
    height: 100%;
    width: 250px;
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

StyledNav.defaultProps = {
  shown: false,
};

const Hamburger = styled.button`
  position: absolute;
  top: 12.5px;
  right: 5px;
  padding: 0;
  height: 32px;
  width: 32px;
  background: rgba(255,255,255,0);
  border: none;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 960px) {
    position: fixed;
    width: 250px;
  }
`;

class Nav extends Component {
  state = {
    shown: false,
  }

  handleClick = () => {
    this.setState(({ shown }) => ({
      shown: !shown,
    }), () => {
      document.body.style.overflow = this.state.shown ? 'hidden' : ''
      // block scroll on iOS safari
      document.documentElement.style.overflow = this.state.shown ? 'hidden' : ''
    });
  }

  render() {
    return (
      <StyledNav shown={this.state.shown}>
        <Hamburger onClick={this.handleClick}>
          <Icon icon="menu" />
        </Hamburger>
        <Container>
          <ProfilePicture />
          <ul className="nav">
            <li><Link onClick={this.handleClick} to="/">Home</Link></li>
            <li><Link onClick={this.handleClick} to="/experience">Experience</Link></li>
            <li><Link onClick={this.handleClick} to="/projects">Projects</Link></li>
            <li><Link onClick={this.handleClick} to="/blog">Blog</Link></li>
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
        </Container>
      </StyledNav>
    );
  }
}

export { Nav };
