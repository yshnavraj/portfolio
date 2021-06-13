import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { FaJava } from "react-icons/fa";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been learning and working with many new emerging Web Technologies like React, Angular, Node.js, MongoDB and also developed some static web applications. I'm passionate about Web Development and in using New Technologies. I've also developed a python application which is integrated with Cloud Platform.
    </SectionText>
    <List>
      <ListItem>
        <AiOutlineHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Databases and PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaJava size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, C, C++ and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
