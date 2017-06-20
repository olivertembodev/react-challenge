import React from "react"
import styled from "styled-components"
import SideBar from "./SideBar"
import SignUpForm from "./SignUpForm"

const SignUpCard = () => {
  return (
    <Container>
      <SideBar />
      <SignUpForm />
    </Container>
  )
}

const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  max-width: 750px;
  width: 100%;
  box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-items: center;
`

export default SignUpCard
