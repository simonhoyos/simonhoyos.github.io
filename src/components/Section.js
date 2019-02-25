import React from 'react';
import { StyledSection } from "./styles/StyledSection";
import { Image } from "./Image";

export function Section({ title, content }) {
  return (
    <StyledSection id={title}>
      <Image />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </StyledSection>
  );
}
