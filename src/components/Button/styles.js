import styled from "styled-components";

export const ContainerButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  padding: 20px;
  background-color: #d3e97a;
  color: #0a0a0a;
  border: 0;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 13px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #222222;
    color: #d3e97a;
  }
`;
