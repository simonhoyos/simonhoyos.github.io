import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Grid } from '../components/Grid';
import reactmde from '../assets/reactmde.png';
import make from "../assets/make.jpg";

export function Projects() {
  return (
    <Section>
      <h2>projects</h2>
      <h3>Training and Mentoring</h3>
      <Grid>
        <Card
          title="React Medellin"
          description="A group of people interested in learning React and its ecosystem."
          image={{
            src: reactmde,
            alt: 'React Medellin Meetup logo'
          }}
          website="https://www.meetup.com/React-Medellin/"
        />
        <Card
          title="Make it Real Top"
          description="High quality online and live programming mentoring."
          image={{
            src: make,
            alt: 'make it real logo'
          }}
          website="https://makeitreal.camp/top"
        />
      </Grid>
      <h3>Build With React</h3>
      <Grid>
        <Card
          title="React Medellin"
          description="A group of people interested in learning React and its ecosystem."
          image={{
            src: reactmde,
            alt: 'React Medellin Meetup logo'
          }}
          website="https://www.meetup.com/React-Medellin/"
        />
        <Card
          title="Make it Real Top"
          description="High quality online and live programming mentoring."
          image={{
            src: make,
            alt: 'make it real logo'
          }}
          website="https://makeitreal.camp/top"
        />
      </Grid>
    </Section>
  );
}
