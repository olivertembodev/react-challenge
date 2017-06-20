import React, { ReactNode } from "react"
import styled from "styled-components"
import { ReactComponent as Logo } from "../../images/icons/SideNavLogo.svg"
import { ReactComponent as UserImage } from "../../images/icons/Userpic.svg"
import { NavLink, NavLinkProps } from "react-router-dom"
import { ReactComponent as HomeLogo } from "../../images/icons/Homelogo.svg"
import { ReactComponent as CoursesIcon } from "../../images/icons/Courseslogo.svg"
import { ReactComponent as SettingsIcon } from "../../images/icons/Settingslogo.svg"
import { ReactComponent as ContactsIcon } from "../../images/icons/ContactsIcon.svg"

const SideNavigation = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
        </LogoWrapper>
      <UserImageWrapper>
        <UserImage />
        <UserName>Joe Bruin</UserName>
      </UserImageWrapper>
      <NavigationWrapper>
        <NavItem>
          <NavItemLink to="/homepage" activeClassName="active">
            <NavLogo>
              <HomeLogo />
            </NavLogo>
            Home
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/coursespage" activeClassName="active">
            <NavLogo>
              <CoursesIcon />
            </NavLogo>
            Courses
          </NavItemLink>
        </NavItem>{" "}
        <NavItem>
          <NavItemLink to="/contact" activeClassName="active">
            <NavLogo>
              <ContactsIcon />
            </NavLogo>
            Contact
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/settings" activeClassName="active">
            <NavLogo>
              <SettingsIcon />
            </NavLogo>
            Settings
          </NavItemLink>
        </NavItem>{" "}
      </NavigationWrapper>
    </Container>
  )
}

interface UserNamePropTypes {
  children: ReactNode
}

interface NavigationPropTypes {
  children: ReactNode
}

interface NavigationItemPropTypes {
  children: ReactNode
}

interface NavLogoPropTypes {
  children: ReactNode
}

const Container = styled.div`
  background: #516de8;
  width: 100%;
  height: 100vh;
  max-width: 270px;
  padding: 35px;
  align-items: center;
  text-align: center;
`

const LogoWrapper = styled.div`
width:100%;`

const UserImageWrapper = styled.div`
  margin-top: 30px;
`

const UserName = styled.div<UserNamePropTypes>`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-top: 21px;
`

const NavigationWrapper = styled.div<NavigationPropTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const NavLogo = styled.div<NavLogoPropTypes>`
  margin-right: 14px;
`

const NavItem = styled.div<NavigationItemPropTypes>`
  padding: 30px 0px;
  width: 100%;
`

const NavItemLink = styled(NavLink)<NavLinkProps>`
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &.active {
    background-color: #fff;
    color: #222222;
    position: relative;

    &::after {
      content: "";
      height: 100%;
      width: 12px;
      position: absolute;
      background: #fffc;
      border-radius: 10px 0 0 10px;
      top: 0;
      right: -35px;
    }

    & svg path {
      fill: #a3c2ff;
    }
  }
`

export default SideNavigation
