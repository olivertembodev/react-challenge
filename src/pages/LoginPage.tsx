import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
import LoginCard from "../components/login/LoginCard";
import BackgroundContainer from "../components/shared/BackgroundContainer";
import { ReactComponent as Logo } from "../images/Logo.svg";

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <Wrapper>
        <CodeLogo />
      </Wrapper>
      <LoginCard />
      <SignUpText>
        Don’t have an account?
        <SignUpLink to="/register"> SignUp</SignUpLink>
      </SignUpText>
    </BackgroundContainer>
  );
};

interface TextPropTypes {
  children: ReactNode;
}

const Wrapper = styled.div<TextPropTypes>`
  width: 100%;
  max-width: 360px;
`;

const SignUpText = styled.p<TextPropTypes>`
  color: #fff;
  font-size: 15px;
  font-weight: lighter;
  margin-top: 35px;
`;

const SignUpLink = styled(Link)<LinkProps>`
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const CodeLogo = styled(Logo)`
  width: 360px;
`;

export default LoginPage;
