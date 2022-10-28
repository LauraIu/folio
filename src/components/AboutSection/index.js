import React from "react";
import { ButtonToUrl } from "../ButtonElements";
import { MdOpenInNew } from "react-icons/md";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  AboutSubtitle,
  Link,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  buttonLabel1,
  buttonLabel2,
  urlLink,
  linkText,
  img,
  alt,
  img2,
  dark,
  primary,
  projectUrl1,
  projectUrl2,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <AboutSubtitle darkText={darkText} >
                I have an MA degree in Media Art and before I worked in marketing, archive digitization, data handling and researching, made freelance web and graphic designs, and organized NGO projects.<br/><br/>It was more than a year ago when I decided to change my workpath and achieve specific knowledge in web development. So I made my big step.<br/><br/>After quitting my job I attended &#160;
                  <Link
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    dark={dark ? 1 : 0}
                  >
                    {linkText}
                  </Link>
                  's Junior Front-End course. Like I'm enthusiastic about "making things work" and have the desire to create amazing things from scratch, afterall choosing the Front-End was more than evident for me.<br/><br/>There I have learned that building beautiful visual experiences and turning them interactive is a very complex workflow. Since then I have the perpetual feeling, that more I understand, more questions I have. Finally beeing devoted and decided helps me to make the magic happen.<br/><br/>So here I am, ready for opportunities to become an efficient part of your team where I can start my developer career! Please feel free to take a look at my CV to find out more about me.
                </AboutSubtitle>
              </TextWrapper>
              
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <BtnWrap>
                  <ButtonToUrl
                    as="a"
                    href={projectUrl1}
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel1} &#160;
                    <MdOpenInNew />
                  </ButtonToUrl>
                  <ButtonToUrl
                    as="a"
                    href={projectUrl2}
                    target="_blank"
                    rel="noopener"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel2} &#160;
                    <MdOpenInNew />
                  </ButtonToUrl>
                </BtnWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
