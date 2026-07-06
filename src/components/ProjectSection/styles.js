import styled from "styled-components";
import { motion } from "motion/react";

export const FeatureProjects = styled(motion.section)``;

export const DescriptionSection = styled.p`
  font-size: 18px;
  max-width: 600px;
  line-height: 150%;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-top: 80px;

  @media (max-width: 1023px) {
    gap: 80px;
    margin-top: 60px;
  }

  @media (max-width: 767px) {
    gap: 56px;
    margin-top: 40px;
  }
`;
