import React from "react";
import Icon_01 from "../../images/svg-2.svg";
import Icon_02 from "../../images/svg-7.svg";
import Icon_03 from "../../images/svg-10.svg";
import {
  OtherContainer,
  OtherH1,
  OtherWrapper,
  OtherCard,
  OtherIcon,
  OtherH2,
  OtherP,
} from "./OtherElements";

const Other = () => {
  return (
    <>
      <OtherContainer id="other">
        <OtherH1>Other Projects from the Past</OtherH1>
        <OtherWrapper>
          <OtherCard>
            <OtherIcon src={Icon_01} />
            <OtherH2>Old web and design works</OtherH2>
            <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={Icon_02} />
            <OtherH2>Art related projects</OtherH2>
            <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP>
          </OtherCard>
          <OtherCard>
            <OtherIcon src={Icon_03} />
            <OtherH2>Otherrr</OtherH2>
            <OtherP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</OtherP>
          </OtherCard>
        </OtherWrapper>
      </OtherContainer>
    </>
  );
};

export default Other;
