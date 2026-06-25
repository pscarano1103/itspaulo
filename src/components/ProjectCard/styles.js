import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ImageArea = styled.div`
  background-color: #272727;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
export const ImageProject = styled.img`
  width: 500px;
  border-radius: 12px;
  margin: 100px 0;
`;

export const InfoProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 16px;
`;

export const TitleProject = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const DescriptionProject = styled.p`
  font-size: 18px;
  line-height: 150%;
`;

export const SpecsProject = styled.div`
  margin-top: 16px;

  p {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid;
    padding-bottom: 5px;
  }
`;
export const TableSpecs = styled.table`
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  border-collapse: collapse;

  tbody tr td {
    border-bottom: 1px solid #cacaca;
    padding: 16px 0;
  }
  tbody tr .item2 {
    text-align: right;

    span {
      color: #d3e97a;
    }
  }
`;

export const LinksProject = styled.div`
  display: flex;
  gap: 24px;

  a {
    margin-top: 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 2px;
    text-decoration: underline;
    text-underline-offset: 5px;
    color: #d3e97a;
    transition: all 0.3s;

    i {
      color: #d3e97a;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
