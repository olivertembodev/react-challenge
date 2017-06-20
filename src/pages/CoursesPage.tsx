import React from "react"
import SideDrawer from "../components/coursespage/SideDrawer"
import styled from "styled-components"
import SideNavigation from "../components/shared/SideNavigation"
import Courses from "../components/coursespage/Courses"
import Accordian from "../components/coursespage/Accordian"

const CoursesPage = () => {
  return (
    <Wrapper>
      <SideNavigation />
      <SideDrawer />
      <SubWrapper>
        <Courses />
        <Accordian />
      </SubWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  /* background: #e5e5e5; */
`
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  width: 100%;
  height: 100vh;
  padding: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export default CoursesPage
