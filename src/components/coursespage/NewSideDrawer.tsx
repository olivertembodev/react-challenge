import React from "react"
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"
import styled from "styled-components"

const NewSideDrawer = () => {
  return (
    <Wrapper collapsed={false} toggled={true}>
      <SidebarHeader>Courses</SidebarHeader>
      <Menu iconShape="square" popperArrow={true}>
        <MenuItem>
          1 <MenuTitle>Intro to Python</MenuTitle>
        </MenuItem>
        <MenuItem>
          2 <MenuTitle>Intro to C++</MenuTitle>
        </MenuItem>
        <MenuItem>
          3 <MenuTitle>Intro to React</MenuTitle>
        </MenuItem>
        {/* <SubMenu title="Components">
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu> */}
      </Menu>
    </Wrapper>
  )
}

const MenuTitle = styled.div``

const Wrapper = styled(ProSidebar)`
  height: 100%;
  max-height: 100vh;
`

export default NewSideDrawer
