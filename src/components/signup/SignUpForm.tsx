import React, { useEffect } from "react";
import styled from "styled-components";
import {AxiosResponse} from "axios"
import Input, { FirstNameInput, LastNameInput } from "./SignUpInput";
import SignUpButton from "./SignUpButton";
import { ReactComponent as RightArrowIcon } from "../../images/icons/arrow_forward.svg";
import { Formik, Form, FormikHelpers, useFormikContext } from "formik";
import { useHistory } from "react-router-dom";
import { useInvitation, useSignup } from "../../api/auth";
import Loading from "../Loader/Loading";

type ErrorString = string | null;

interface AutoSetEmailProps{invitationResponse:AxiosResponse|undefined}

const AutoSetEmail = ({ invitationResponse }: AutoSetEmailProps) => {
  const { setFieldValue } = useFormikContext();

  useEffect(()=>{
    if(invitationResponse?.data){
      setFieldValue("email",invitationResponse?.data?.email)
    }
  }, [invitationResponse])

  return null
}

const SignUpForm = () => {

  const [signup, { isLoading }] = useSignup();

  const invitationResponse = useInvitation();



  console.log(invitationResponse)

  const handleLoginSubmit = async (
    firstName: string,
    lastName: string,
    userName: string,
    password: string
  ) => {

    if (invitationResponse) {
      let data = invitationResponse?.data
      await signup({
        firstName,
        lastName,
        email: data.email,
        userName,
        password,
        role:data.role,
        token: data.token
      });
    } else {
      alert("No Invitation token");
    }
  };

  function validateEmail(value: string) {
    let error: ErrorString = null;
    if (!value) {
      error = "Email cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateForEmpty(value: string, field: string) {
    let error: ErrorString = null;
    if (value === "") {
      error = `${field} cannot be empty`;
    }
    return error;
  }

  function validateForGt5(value: string, field: string) {
    let error: ErrorString = null;
    if (value.length < 6) {
      error = `${field} cannot be less than 5 characters`;
    }
    return error;
  }

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: invitationResponse?.data?.email,
          userName: "",
          password: "",
        }}

        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          const { firstName, lastName, userName, password } = values;
          handleLoginSubmit(firstName, lastName, userName, password);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <UpperWrapper>
              <InputWrapperFirstName>
                <FirstNameInput
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  validate={(v: string) => validateForEmpty(v, "First name")}
                />

                {errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
              </InputWrapperFirstName>
              <InputWrapperLastName>
                <LastNameInput
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  validate={(v: string) => validateForEmpty(v, "Last name")}
                />
                {errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
              </InputWrapperLastName>
            </UpperWrapper>
            <Wrapper>
              <Input readOnly id="email" name="email" placeholder="Email"  />
              <AutoSetEmail invitationResponse={invitationResponse} />
              {/* {errors.email && touched.email && <Error>{errors.email}</Error>} */}
              <Input
                id="userName"
                name="userName"
                placeholder="Username"
                validate={(v: string) => validateForGt5(v, "Username")}
              />
              {errors.userName && touched.userName && <Error>{errors.userName}</Error>}
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                validate={(v: string) => validateForGt5(v, "Password")}
              />
              {errors.password && touched.password && <Error>{errors.password}</Error>}
            </Wrapper>
            <SignUpButton>
              {isLoading ? (
                <Loading height={15} color="white" />
              ) : (
                  <>
                    Create Account <RightArrowIcon />
                  </>
                )}
            </SignUpButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
`;
const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapperFirstName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  width: 100%;
`;

const InputWrapperLastName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #ff7070;
  display: flex;
  padding: 3px;
  // margin-top: 3px;
  margin-bottom: -22px;
`;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}

export default SignUpForm;
