import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaFacebook,
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
  // FooterLinkTitle,
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
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    /* set the icons color */
    // <IconContext.Provider value={{ color: "#f9f9f9"}}>
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              {/* <FooterLinkTitle>About me</FooterLinkTitle> */}

              <FooterLink to="#home" smooth>
                Home
              </FooterLink>
              <span>|</span>
              <FooterLink to="#about" smooth>
                About
              </FooterLink>
              <span>|</span>
              <FooterLink to="#projects" smooth>
                DevProjects
              </FooterLink>
              <span>|</span>
              <FooterLink to="#other" smooth>
                OtherStuff
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              IuLa
            </SocialLogo>
            <WebsiteRights>
              IuLa&copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
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
