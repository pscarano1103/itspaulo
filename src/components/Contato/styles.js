import styled from "styled-components";
import { motion } from "motion/react";
export const ContactSection = styled(motion.div)`
  display: flex;
  gap: 40px;
  scroll-margin-top: 30px;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const InfoContactSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .title-section {
    flex: 0;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    p {
      font-size: 18px;
    }
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;
  flex-wrap: wrap;

  a {
    font-size: 18px;
    padding: 20px;
    border-radius: 50%;
    background-color: #444;
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

  @media (max-width: 767px) {
    gap: 16px;

    a {
      padding: 16px;
      font-size: 16px;
    }
  }
`;
export const FormSection = styled.div`
  flex: 1;

  form {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 16px;
      margin-top: 24px;

      &:first-child {
        margin-top: 0;
      }
    }

    input {
      height: 50px;
      border: 0;
      background-color: #444;
      padding: 12px 16px;
    }

    textarea {
      height: 150px;
      border: 0;
      background-color: #444;
      resize: none;
      margin-bottom: 30px;
      padding: 12px 16px;
    }

    .ButtonForm {
      display: block;
      width: 25%;
    }
  }

  @media (max-width: 1023px) {
    form {
      max-width: 100%;
    }
  }

  @media (max-width: 767px) {
    form {
      gap: 8px;

      input {
        height: 46px;
      }

      textarea {
        height: 120px;
        margin-bottom: 20px;
      }

      .ButtonForm {
        width: auto;
        min-width: 140px;
      }
    }
  }
`;
