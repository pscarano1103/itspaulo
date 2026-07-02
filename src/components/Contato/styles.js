import styled from "styled-components";

export const ContactSection = styled.div`
  display: flex;
  scroll-margin-top: 110px;
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
`;
export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;

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
      background-color: #1a1a1a;
      padding: 12px 16px;
    }

    textarea {
      height: 150px;
      border: 0;
      background-color: #1a1a1a;
      resize: none;
      margin-bottom: 30px;
    }

    .ButtonForm {
      display: block;
      width: 25%;
    }
  }
`;
