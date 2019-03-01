import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Section } from "../components/Section";

const Content = styled.blockquote`
  font-size: 25px;
  font-weight: 700;
  padding: 20px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Home() {
  return (
    <Section>
      <h2>Homepage</h2>
      <Carousel
        showArrows={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <Content>Passionate about coding. Love solving problems with React</Content>
        </div>
        <div>
          <Content>Always eager to learn new things an accept new challenges.</Content>
        </div>
        <div>
          <Content>My main mission is to create tools that help others to solve their day to day problems, facilitating them to achieve more in their personal and professional life.</Content>
        </div>
      </Carousel>
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
    </Section>
  );
}
