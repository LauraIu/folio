import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElemnets";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it ghjhgj</FooterLink>
              <FooterLink to="/signin">How it ghjhgj</FooterLink>
              <FooterLink to="/signin">How it ghjhgj</FooterLink>
              <FooterLink to="/signin">How it ghjhgj</FooterLink>
              <FooterLink to="/signin">How it ghjhgj</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Resourses</FooterLinkTitle>
              <FooterLink to="/signin">Forest</FooterLink>
              <FooterLink to="/signin">How it </FooterLink>
              <FooterLink to="/signin">Ghjhgj</FooterLink>
              <FooterLink to="/signin">Hojhgj</FooterLink>
              <FooterLink to="/signin">Uitghjh</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Partners</FooterLinkTitle>
              <FooterLink to="/">YouTube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">IuLA</SocialLogo>
            <WebsiteRights>
              IuLa c {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
