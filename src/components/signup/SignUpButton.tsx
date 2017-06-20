import { ReactNode } from "react"
import styled from "styled-components"

interface ButtonPropTypes {
  children: ReactNode
}

const SignUpButton = styled.button<ButtonPropTypes>`
  display:flex;
  align-items:center;
  justify-content:space-around;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  width: 180px;
  padding: 12px;
  background: #516de8;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  float:right;
`

export default SignUpButton
