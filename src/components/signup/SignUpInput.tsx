import { ReactNode } from "react"
import styled from "styled-components"
import { Field } from "formik"

interface SignUpPropTypes {
  icon?: ReactNode
  placeholder: string
}

const Input = styled(Field)`
  /* background: rgba(255, 255, 255, 0.5); */
  /* Gray 4 */
  color: #333333;
  border: none;
  background-color: inherit;
  border-bottom: 2px solid #bdbdbd;
  width: 100%;
  padding: 12px 5px 5px 0px;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  margin-top: 10px;
  text-align: start;

  &::placeholder {
    color: #BDBDBD;
  }
`

export const EmailInput = styled(Input)``

export const FirstNameInput = styled(Input)`
  margin-right: 50px;

`
export const LastNameInput = styled(Input)`
  border: none;
  background-color: inherit;
  border-bottom: 2px solid #bdbdbd;
  width: 100%;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  /* margin-bottom: 20px; */
  text-align: start;
`

export default Input
