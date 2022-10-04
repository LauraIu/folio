import React from "react";
import { animateScroll as scroll } from "react-scroll";
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

// import { IconContext } from "react-icons";


const Footer = () => {

   // Scrolling back to top
   const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    /* set the icons color */
    // <IconContext.Provider value={{ color: "#f9f9f9"}}>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About me</FooterLinkTitle>
                <FooterLink to="/projects">DevProjects</FooterLink>
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
              <SocialLogo to="/" onClick={toggleHome}>IuLa</SocialLogo>
              <WebsiteRights>
                IuLa&copy; {new Date().getFullYear()} All rights reserved.
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
    // </IconContext.Provider>
  );
};

export default Footer;
