import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  height: calc(100vh - 102px);
  padding-top: 20px;
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
  }
`;
