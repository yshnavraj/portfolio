import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi! My name is Vyshnav Raj <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an Undergrad from Keshav Memorial Institute of Technology in department of Computer Science. I like programming things and developed Web Applications and have an experience with DataStructures &amp; Algorithms. I also worked on like ReactJS, NodeJS, REST API. 
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;