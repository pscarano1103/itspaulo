import styled from "styled-components";

export const ContainerSobre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-bottom: 60px;

  @media (max-width: 1023px) {
    gap: 100px;
  }

  @media (max-width: 767px) {
    gap: 80px;
    padding-bottom: 40px;
  }
`;
