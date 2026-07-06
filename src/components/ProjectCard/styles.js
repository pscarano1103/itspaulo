import styled from "styled-components";
import { motion } from "motion/react";

export const CardItem = styled(motion.div)`
  display: flex;
  align-items: start;
  gap: 40px;
  border-radius: 12px;
  padding: 15px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 15px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  border-radius: 12px;

  @media (max-width: 1023px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 767px) {
    padding: 0px;
  }
`;
export const ImageProject = styled(motion.img)`
  width: 500px;
  max-width: 100%;
  border-radius: 12px;
  margin: 0px 0;

  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
  }
`;

export const InfoProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 16px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const TitleProject = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #d3e97a;

  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

export const DescriptionProject = styled.p`
  font-size: 18px;
  line-height: 150%;

  @media (max-width: 767px) {
    font-size: 16px;
  }
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
    padding: 16px 5px;
  }
  tbody tr .item2 {
    text-align: right;
    padding: 0 10px;
    span {
      color: #d3e97a;
    }
  }

  @media (max-width: 767px) {
    font-size: 13px;

    tbody tr td {
      padding: 12px 4px;
    }
  }
`;

export const LinksProject = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

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

  @media (max-width: 767px) {
    gap: 12px;

    a {
      margin-top: 16px;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`;
