import React, { useState } from "react"
import styled from "styled-components"
import { NavLink, NavLinkProps } from "react-router-dom"
import { ReactComponent as NavigationIcon } from "../../images/icons/navigate.svg"
import Sidebar from "react-sidebar"

const SideDrawer = () => {
  function onSetSidebarOpen() {
    if (sidebarOpen && Docked) {
      setsidebarOpen(false)
      setDocked(false)
      setRotate(false)
    } else {
      setsidebarOpen(true)
      setDocked(true)
      setRotate(true)
    }
  }
  var setter = false
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const [Docked, setDocked] = useState(false)
  const [rotate, setRotate] = useState(false)

  if (sidebarOpen) setter = true
  else setter = false

  return (
    <Wrapper setter={setter}>
      <Sidebar
        sidebar={
          <SideBarWrapper setter={setter}>
            <Title>My Courses</Title>
            <NavigationOption>
              <Option to="/" activeClassName="active">
                1 <OptionTitle>Intro to Python</OptionTitle>
              </Option>
              <Option to="/" activeClassName="active">
                2 <OptionTitle>Intro to C++</OptionTitle>
              </Option>
              <Option to="/" activeClassName="active">
                3 <OptionTitle>Intro to React</OptionTitle>
              </Option>
            </NavigationOption>
          </SideBarWrapper>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "#333333",
            color: "white",
            width: "100%",
            maxWidth: "260px",
            boxShadow: "none",
            zIndex: "0",
          },
          root: { left: "270px" },
        }}
        docked={Docked}
        shadow={false}
      >
        <NavigationBar>
          <NavigateButton rotate={rotate} onClick={onSetSidebarOpen}>
            <NavigationIcon />
          </NavigateButton>
          {!sidebarOpen ? (
            <NavigationOption>
              <Option to="/">1</Option>
              <Option to="/">2</Option>
              <Option to="/">3</Option>
            </NavigationOption>
          ) : (
            <div></div>
          )}
        </NavigationBar>
      </Sidebar>
    </Wrapper>
  )
}

interface RotatePropsTypes {
  rotate: Boolean
}

interface MarginPropTypes {
  setter: Boolean
}

const Wrapper = styled.div<MarginPropTypes>`
  margin-left: ${(props) => (props.setter ? "310px" : "50px")};
  /* opacity: 0.7; */
  /* transform: scale(0.85); */
  transition: all 300ms ease-out;
`

const SideBarWrapper = styled.div<MarginPropTypes>`
  /* margin-left: ${(props) => (props.setter ? "300px" : "")}; */
`

const OptionTitle = styled.div`
  margin-left: 25px;
`

const Title = styled.h1`
  width: 100%;
  padding: 12px;
  font-weight: 800;
  font-size: 22px;
  border-bottom: 1px solid black;
`

const NavigationBar = styled.div`
  background: #333333;
  width: 100%;
  max-width: 53px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease-out;
  text-align: center;
`

const NavigationOption = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 18px;
  display: flex;
  flex-direction: column;
`
const Option = styled(NavLink)<NavLinkProps>`
  padding: 18px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  &:hover {
    background: #808080;
  }
  /* &.active {
    background-color: #fff;
  } */
`

const NavigateButton = styled.button<RotatePropsTypes>`
  width: 100%;
  height: 100%;
  max-height: 55px;
  background: #333333;
  border: 1px solid #333333;
  border-bottom: 1px solid black;
  cursor: pointer;
  /* transition: all 0.3s ease-out; */
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
  border-top: ${(props) => (props.rotate ? "1px solid black" : "")};
  border-bottom: ${(props) => (props.rotate ? "none" : "")};
`

export default SideDrawer
