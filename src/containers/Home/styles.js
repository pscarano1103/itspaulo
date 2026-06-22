import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

/* Hero Section */
export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //gap: 80px;
  height: 100vh;

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

/* Project Section */

export const FeatureProjects = styled.section`
  padding: 80px 0;
`;

export const TitleSection = styled.h2`
  font-size: 76px;
`;

export const DescriptionSection = styled.p`
  font-size: 18px;
  max-width: 600px;
`;

/* About Section */

export const AboutSection = styled.section`
  display: flex;
  height: 100vh;
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

  a {
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
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 32px;
  font-weight: 400;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
`;
