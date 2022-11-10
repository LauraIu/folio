import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  height: auto;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: #728775;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 16px;
  text-decoration: none;
  color: #f8f8f8;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin: 8px 16px 0px 16px;
  }
`;

export const FormContent = styled.div`
  min-height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #f8f8f8;
  max-width: 360px;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px 24px;
  border-radius: 2px;
  /* border: 1px solid #728775; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  /* border: 1px solid yellow; */

  @media screen and (max-width: 400px) {
    padding: 24px 16px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #e5b507;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 400px) {
    margin-bottom: 16px;}
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #010606;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 2px;
  border: 1px solid #728775;
  background-color: #f8f8f8;
  caret-color: #e5b507;

  &:focus,
  :hover {
    border: 1px solid #e5b507;
    outline: none;
    background-color: #fff;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 16px;
    padding: 5px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: #f8f8f8;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 32px;
  border-radius: 2px;
  border: 1px solid #728775;
  /* box-sizing: border-box; */
  resize: none;
  cursor: text;
  caret-color: #e5b507;

  &:focus,
  :hover {
    border: 1px solid #e5b507;
    outline: none;
    background-color: #fff;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 16px;
    padding: 5px;
  }
`;

export const NavBtnLink = styled.button`
  justify-self: center;
  white-space: nowrap;
  padding: 5px 15px;
  color: #010606;
  font-size: 16px;
  text-decoration: none;
  outline: none;

  background: transparent;
  border: 1px solid #010606;
  border-radius: 2px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #e5b507;
    background: #e5b507;
    color: #f8f8f8;
  }
`;
