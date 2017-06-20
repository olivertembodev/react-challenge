import React from "react";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useLogin } from "../../api/auth";
import Loading from "./../Loader/Loading";
import { ReactComponent as UserNameIcon } from "../../images/icons/usernameicon.svg"
import { ReactComponent as PasswordIcon } from "../../images/icons/PasswordIcon.svg"

type ErrorString = string | null;

const LoginCard = () => {
  function validate(value: string, field: string) {
    let error: ErrorString = null;
    if (value === "") error = `${field} cannot be empty.`;
    return error;
  }

  const [login, { isLoading }] = useLogin();

  const handleLoginSubmit = async (email: string, password: string) => {
    await login({ email, password });
  };

  return (
    <Card>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          const { userName: email, password } = values;
          handleLoginSubmit(email, password);
        }}
      >
        {({ errors, touched,values }) => (
          <Form>
            <LoginInputWrapper>
            <LoginInput
              id="userName"
              name="userName"
              placeholder="USERNAME"
              validate={(v: string) => validate(v, "Username")}
            />
            {errors.userName && touched.userName && <Error>{errors.userName}</Error>}
            {values.userName === "" && (
            <IconWrapper>
            <UserNameIcon />
            </IconWrapper>)}
            </LoginInputWrapper>
            <LoginInputWrapper>
            <LoginInput
              id="password"
              name="password"
              placeholder="PASSWORD"

              type="password"
              validate={(v: string) => validate(v, "Password")}
            />
            {errors.password && touched.password && <Error>{errors.password}</Error>}
            {values.password === "" && (
            <IconWrapper>
            <PasswordIcon />         
            </IconWrapper>)}
            </LoginInputWrapper>
            <LoginButton type="submit">{isLoading ? <Loading height={15} color="white" /> : "Login"}</LoginButton>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 60px;
  margin-top: 55px;
  width: 100%;
  max-width: 470px;
`;

interface Values {
  userName: string;
  password: string;
}

const Error = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #ff7070;
  display: flex;
  justify-content: center;
  padding: 3px;
  // margin-top: 3px;
  margin-bottom: -22px;
`;

const IconWrapper = styled.div`
position:absolute;
top:2rem;
left:6.5rem;
`;

const LoginInputWrapper = styled.div`
display:flex;
flex-direction:column;
position:relative;

`;

export default LoginCard;
