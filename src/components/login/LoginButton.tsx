import { ReactNode } from "react"
import styled from "styled-components"

interface ButtonPropTypes {
  children: ReactNode
}

const LoginButton = styled.button<ButtonPropTypes>`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background: #516de8;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.25s background-color;

  &:hover {
    transition: 0.25s background-color;
    background-color: #3a53bd;
  }
`

export default LoginButton
