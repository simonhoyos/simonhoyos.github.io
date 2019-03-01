import React, { Fragment } from 'react';
import { Section } from '../components/Section';
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
import { CardContainer } from '../components/CardContainer';
import { experiences } from '../data/experiences';

export function Experience() {
  return (
    <Section>
      <h2>experience</h2>
      {experiences.map(({ section, cards}) => (
        <Fragment key={section}>
          <CardContainer title={section}>
            <Grid>
              {cards.map(({ title, subtitle, description, image, icons}) => (
                <Card
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  image={image}
                  icons={icons}
                  key={`${section}_${title}`}
                />
              ))}
            </Grid>
          </CardContainer>
        </Fragment>
      ))}
    </Section>
  );
}
