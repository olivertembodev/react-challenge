import React from "react"
import styled from "styled-components"

const HomeWorkCard = () => {
  return (
    <Wrapper>
      <Heading>This week assignment 1</Heading>
      <Content>
        Put assignment description here Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* transition: all 2000ms ease-in-out; */
`

const Heading = styled.div`
  font-weight: 600;
  font-size: 15px;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 10px;
  cursor:pointer;
`

const Content = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-right: 10px;
`

export default HomeWorkCard
