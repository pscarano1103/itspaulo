import styled from "styled-components";
import { Link as Reactlink } from "react-router-dom";

/* About Section */
export const AboutContainer = styled.section`
  display: flex;
  .title-about {
    width: 40%;
  }
`;

export const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
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
`;

export const AboutSubTitle = styled.p`
  font-size: 32px;
  font-weight: 400;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
`;
