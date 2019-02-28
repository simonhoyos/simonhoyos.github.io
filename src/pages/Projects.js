import React from 'react';
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";

export function Projects() {
  return (
    <Section>
      <h2>projects</h2>
      <Grid>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Grid>
    </Section>
  );
}
