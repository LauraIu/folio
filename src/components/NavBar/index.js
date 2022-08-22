import React from "react";
import { FaBars } from 'react-icons/fa';  /* https://react-icons.github.io/react-icons/search?q=bars*/
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">IuLa</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
