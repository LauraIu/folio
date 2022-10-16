import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#about" smooth onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="#projects" smooth onClick={toggle}>
            DevProjects
          </SidebarLink>
          <SidebarLink to="#other" smooth onClick={toggle}>
            OtherStuff
          </SidebarLink>
          <SidebarLink to="#contact" smooth onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" >Sign In</SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
