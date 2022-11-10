import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  /* padding: 8px 24px; */
  padding: 120px 24px 80px 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const AboutHeading = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  line-height: 1.1; */
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f8f8f8" : "#728775")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};
`;
