import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  padding-top: 120px;
  scroll-margin-top: 80px;
`;
export const InfoContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
  p {
    font-size: 18px;
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;

  a i {
    font-size: 25px;
    color: #d3e97a;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const FormSection = styled.div`
  width: 60%;

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
