import styled from "styled-components";
import { Link as Reactlink } from "react-router-dom";
import { motion } from "motion/react";
/* About Section */
export const AboutContainer = styled(motion.section)`
  display: flex;
  gap: 32px;

  .title-about {
    width: 40%;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 24px;

    .title-about {
      width: 100%;
    }
  }
`;

export const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Link = styled(Reactlink)`
  margin-top: 35px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 4px;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: #d3e97a;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 767px) {
    margin-top: 16px;
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 32px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
