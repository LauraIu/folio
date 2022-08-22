import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  height: 80px;
  /* margin-top: -80px; */
  top: 0;
  z-index: 10;

  background: #589;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;

  margin-left: 24px;

  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: red;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  dislay: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
