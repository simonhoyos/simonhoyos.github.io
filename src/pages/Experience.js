import React from 'react';
import { Section } from '../components/Section';
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
import huge from "../assets/huge.png";
import magneto from "../assets/magneto.jpg";
import make from "../assets/make.jpg";

export function Experience() {
  return (
    <Section>
      <h2>experience</h2>
      <Grid>
        <Card
          title="Huge Inc."
          description="Experience design and digital marketing agency that provides strategy, marketing, design, and technology services."
          image={{
            src: huge,
            alt: 'huge logo'
          }}
          website="https://www.hugeinc.com/"
        />
        <Card
          title="Magneto365"
          description="Find and apply to inspiring jobs."
          image={{
            src: magneto,
            alt: 'magneto logo'
          }}
          website="https://www.magneto365.com/"
        />
        <Card
          title="Make it Real"
          description="High quality online and live programming mentoring."
          image={{
            src: make,
            alt: 'make it real logo'
          }}
          website="https://makeitreal.camp/"
        />
      </Grid>
    </Section>
  );
}
