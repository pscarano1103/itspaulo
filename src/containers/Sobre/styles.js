import styled from "styled-components";

export const ContainerSobre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  scroll-margin-top: 80px;
`;

export const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const AboutInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .about-title {
    font-size: 32px;
  }

  .about-desc {
    font-size: 18px;
  }
`;

export const ImageHero = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c7c7c7;
  height: 700px;
  max-width: 100%;
  border-radius: 16px;

  img {
    background-color: transparent;
  }
`;

export const HabilitiesSection = styled.div`
  display: flex;

  h2 {
    display: block;
    width: 50%;
  }
`;
export const HabilitiesInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .hability-desc {
    padding: 10px;
  }

  .habilities-colection {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
