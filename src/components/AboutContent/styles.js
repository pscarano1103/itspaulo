import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;

  img {
    width: 450px;
    background-color: #8774bd;
    border-radius: 16px;
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
