import React from 'react';
import { StyledSection } from "./styles/StyledSection";
import { ProfilePicture } from './ProfilePicture';

export function Home() {
  return (
    <StyledSection id="home">
      <ProfilePicture />
      <div>
        <h2>Home</h2>
        <p>
          My main mission is to create tools that help others to solve their day to day problems, facilitating them to achieve more in their personal and professional life.<br/>
          <br/>
          After working and starting a new, somehow successful, business in the tourism industry, I noticed that there was something that was still missing in my life. A goal, an objective.<br/>
          <br/>
          That's when I decided to undertake into this new path in the programming world, with the sole purpose of solving real problems for real people.<br/>
          <br/>
          Walking this path, I had the fortune to meet with a great community, willing to share all their knowledge and help others without waiting for anything in return. That's when I made my second big decision. I would work to learn, to share my knowledge and experiences, and to inspire others to do the same.<br/>
          <br/>
          After some experiences working as a web engineer at startups, digital agencies, a community of almost 2000 members, and some blog posts, I'm 100% sure that all these goals are achievable.<br/>
          <br/>
          ---------<br/>
          <br/>
          I'm passionate about coding, learning new things, teaching others and accepting new challenges.
        </p>
      </div>
    </StyledSection>
  );
}
