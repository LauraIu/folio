import React from "react";
import {
  SigninContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SigninComponent = () => {
  return (
    <SigninContainer id="signin">
      <FormWrap>
        <Icon to="/">IuLa</Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SigninContainer>
  );
};

export default SigninComponent;
