import React, { useState } from "react";
import Video from "../../videos/video_09.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>Hello!</HeroTitle>
        <HeroP>
          I am a Frontend developer and I'm open to explore new experienses
          working with You! As I bhgh hfd gfdg g t t ttttrttr hold a Master’s
          degree in Media Artdjsklgdkgjh I also worked as an Art teacher and I
          regularly completed freelance web design, graphic and editorial
          projects.{" "}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
