import styled from "styled-components";

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
