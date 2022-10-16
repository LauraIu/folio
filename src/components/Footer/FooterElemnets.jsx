import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const FooterContainer = styled.div`
  background-color: #010606;
`;

export const FooterWrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinksItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #728775;

  @media screen and (max-width: 420px) {
    margin: 10px;
    padding: 10px;
    width: 100%;
  }
`;

// export const FooterLinkTitle = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
// `;

export const FooterLink = styled(Link)`
  color: #728775;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 14px;


  &:hover {
    color: #e5b507;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #728775;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover{
    color: #e5b507;
  }
`;

export const WebsiteRights = styled.small`
  color: #728775;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #728775;
  font-size: 24px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    color: #e5b507;
  }
`;
