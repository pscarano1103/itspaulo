import styled from "styled-components";
import { Link as Reactlink } from "react-router-dom";

/* Hero Section */
export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 100px);

  h1 {
    font-size: 100px;
    line-height: 90%;
    color: #fff;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 550px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;

  a {
    font-size: 18px;
    padding: 20px;
    border-radius: 50%;
    background-color: #222;
    transition: all 0.3s ease-in-out;
    i {
      background-color: transparent;
      color: #d3e97a;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      background-color: #d3e97a;
      color: #0a0a0a;

      i {
        color: #0a0a0a;
      }
    }
  }
`;

export const ImagePerfil = styled.img`
  max-width: 600px;
  background-color: #c7c7c7;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

/* About Section */
export const TitleSection = styled.h2`
  font-size: 76px;
`;

export const AboutSection = styled.section`
  display: flex;
  padding: 80px 0;
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

/* Projects Section */

export const FeatureProjects = styled.section`
  padding: 80px 0;
`;

export const DescriptionSection = styled.p`
  font-size: 18px;
  max-width: 600px;
`;

//estilização da tabela de especs
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-top: 80px;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ImageArea = styled.div`
  background-color: #1a1a1a;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
export const ImageProject = styled.img`
  border-radius: 12px;
  margin: 100px 0;
`;

export const InfoProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 16px;
`;

export const TitleProject = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const DescriptionProject = styled.p`
  font-size: 18px;
  line-height: 150%;
`;

export const SpecsProject = styled.div`
  margin-top: 16px;

  p {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid;
    padding-bottom: 5px;
  }
`;
export const TableSpecs = styled.table`
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  border-collapse: collapse;

  tbody tr td {
    border-bottom: 1px solid #cacaca;
    padding: 16px 0;
  }
  tbody tr .item2 {
    text-align: right;
  }
`;

export const LinksProject = styled.div`
  display: flex;
  gap: 24px;

  a {
    margin-top: 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 2px;
    text-decoration: underline;
    text-underline-offset: 5px;
    color: #d3e97a;
    transition: all 0.3s;

    i {
      color: #d3e97a;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
