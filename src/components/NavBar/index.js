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
  NavBtn,
  NavBtnLink
} from "./NavBarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">IuLa</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
