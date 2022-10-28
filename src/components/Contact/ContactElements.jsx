import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: #010606;
`;

export const FormWrap = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #728775;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010606;
  max-width: 360px;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 52px 32px;
  border-radius: 2px;
  border: 1px solid #728775;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  /* border: 1px solid yellow; */

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #728775;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #728775;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 2px;
  border: 1px solid #728775;
  background-color: #010606;
  caret-color: #e5b507;

  &:focus, :hover{
    border: 1px solid #e5b507;
    outline: none;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: #010606;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 32px;
  border-radius: 2px;
  border: 1px solid #728775;
  /* box-sizing: border-box; */
  resize: none;
  cursor: text;
  caret-color: #e5b507;

  &:focus, :hover{
    border: 1px solid #e5b507;
    outline: none;
  }
`;
