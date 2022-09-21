import React from "react";
import Icon_01 from "../../images/svg-2.svg";
import Icon_02 from "../../images/svg-7.svg";
import Icon_03 from "../../images/svg-10.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon_01} />
          <ServicesH2>Grrdhej expenses</ServicesH2>
          <ServicesP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon_02} />
          <ServicesH2>Rdhej hicking</ServicesH2>
          <ServicesP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon_03} />
          <ServicesH2>Go forward</ServicesH2>
          <ServicesP>Jahh mffd kkfrhffms, nfjdhf, dhjdg ab ffhdjtr.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
