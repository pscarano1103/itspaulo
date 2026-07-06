import styled from "styled-components";
import { motion } from "motion/react";

export const ExperienceSection = styled(motion.div)`
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    min-height: auto;
    padding: 24px 0 0;
  }
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

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    /* gap: 40px;
    min-height: auto;
    padding: 24px 0 0; */
  }
`;
export const ExperienceDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1023px) {
    .exp-desc {
      gap: 25px;
      line-height: 200%;
    }
  }
`;
