import styled from "styled-components";
import { motion } from "motion/react";

export const ExperienceSection = styled(motion.div)`
  display: flex;
`;
export const Experiencelist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;
export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ExperienceHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .exp-title {
    font-size: 24px;
  }

  .exp-time {
    font-size: 18px;
    color: #d3e97a;
  }
`;
export const ExperienceDesc = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;
