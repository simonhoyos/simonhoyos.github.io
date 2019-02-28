import React from 'react';
import { Section } from '../components/Section';
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
import { CardContainer } from '../components/CardContainer';
import { SectionHeader } from "../components/SectionHeader";
import { experiences } from '../data/experiences';

export function Experience() {
  return (
    <Section>
      <h2>experience</h2>
      {experiences.map(({ section, cards}) => (
        <>
          <SectionHeader>{section}</SectionHeader>
          <CardContainer>
            <Grid>
              {cards.map(({ title, subtitle, description, image, icons}) => (
                <Card
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  image={image}
                  icons={icons}
                />
              ))}
            </Grid>
          </CardContainer>
        </>
      ))}
    </Section>
  );
}
