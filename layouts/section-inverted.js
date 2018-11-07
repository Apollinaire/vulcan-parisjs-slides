import React from 'react';
import Section from './section';

export default function SectionInverted({children}) {
  return (
    <Section inverted>
      {children}
    </Section>
  )
}