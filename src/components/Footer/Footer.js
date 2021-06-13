import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
      <SectionText style={{color: "white"}}><b>Contact</b></SectionText>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:967-631-4108">+91 967-631-4108</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>EMAIL</LinkTitle>
          <LinkItem href="mailto:contact@vyshnavraj.com">contact@vyshnavraj.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/yshnavraj">
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vyshnavraj">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/yshnavradz">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
