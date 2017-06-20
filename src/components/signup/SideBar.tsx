import React, { ReactNode } from "react"
import { Link, LinkProps } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as Logo } from "../../images/Logo.svg"

const SideBar = () => {
  return (
    <Card>
      <CodeLogo />
      <SignUpTitle> Sign Up </SignUpTitle>
      <SignUpText>
        Get started by creating an account and start learning!
      </SignUpText>
      <LoginDiv>
        <LoginDivText>Have an account?</LoginDivText>
        <SignUpLink to="/login">Login</SignUpLink>
      </LoginDiv>
    </Card>
  )
}

const CodeLogo = styled(Logo)`
  width: 100%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 221px;
  height: 484px;
  background: #516de8;
  border-radius: 5px;
  padding: 30px;
  margin: 13px;
`

interface TextPropTypes {
  children: ReactNode
}

const SignUpTitle = styled.p<TextPropTypes>`
  font-weight: 800;
  font-size: 24px;
  margin-top: 75px;
  color: #f2f2f2;
`

const SignUpText = styled.p<TextPropTypes>`
  font-weight: lighter;
  font-size: 15px;
  margin-top: 5px;
  color: #f2f2f2;
`

const LoginDiv = styled.p<TextPropTypes>`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  width: 100%;
  padding: 12px;
  margin-top: 150px;
`

const LoginDivText = styled.p<TextPropTypes>`
  font-weight: normal;
  font-size: 12px;
  color: #f2f2f2;
`

const SignUpLink = styled(Link)<LinkProps>`
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
`

export default SideBar
