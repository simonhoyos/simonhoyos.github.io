import React from 'react';
import styled from 'styled-components';

const StyledUnsplashRefLink = styled.a`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 4px 6px;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.2;
  display: inline-block;
  border-radius: 3px;

  svg {
    height: 12px;
    width:auto;
    position: relative;
    vertical-align: middle;
    top: -2px;
    fill: white;
  }

  .author {
    display: inline-block;
    padding:2px 3px;
  }
`;

export function UnsplashRefLink() {
  return (
    <StyledUnsplashRefLink
      href="https://unsplash.com/@joelmott?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
      target="_blank"
      rel="noopener noreferrer"
      title="Photos from Joel Mott"
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </svg>
      </span>
      <span className="author">Joel Mott</span>
    </StyledUnsplashRefLink>
  );
}
