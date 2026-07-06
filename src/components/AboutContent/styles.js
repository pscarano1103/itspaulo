import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;
  scroll-margin-top: 102px;

  img {
    width: 450px;
    background-color: #c7c7c7;
    border-radius: 16px;

    @media (max-width: 1023px) {
      max-width: 100%;
      width: 100%;
    }

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    min-height: auto;
    padding: 24px 0 0;
  }
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

  @media (max-width: 1023px) {
    width: 100%;
    gap: 24px;

    .about-title {
      line-height: 130%;
      width: 100%;
    }

    .about-desc {
      font-size: 16px;
      line-height: 200%;
      width: 100%;
    }
  }
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
    background-color: #444;
    transition: all 0.3s ease-in-out;
    i {
      background-color: transparent;
      color: #d3e97a;
      transition: all 0.2s ease;
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
