import { motion } from "motion/react";
import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  min-height: calc(100vh - 100px);
  padding: 24px 0;

  h1 {
    font-size: clamp(48px, 8vw, 100px);
    line-height: 90%;
    color: #fff;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    min-height: auto;
    padding: 24px 0 0;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: clamp(42px, 12vw, 56px);
    }

    p {
      font-size: 16px;
    }
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
  flex-wrap: wrap;

  a {
    font-size: 18px;
    padding: 20px;
    border-radius: 50%;
    background-color: #444;
    transition: all 0.2s ease;
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

  @media (max-width: 767px) {
    margin-top: 20px;
    gap: 12px;

    a {
      padding: 16px;
      font-size: 16px;
    }
  }
`;

export const ImagePerfil = styled(motion.img)`
  max-width: 600px;
  width: min(100%, 600px);
  background-color: #c7c7c7;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-self: center;

  @media (max-width: 1023px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
