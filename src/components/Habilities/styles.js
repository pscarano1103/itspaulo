import styled from "styled-components";
import { motion } from "motion/react";

export const HabilitiesSection = styled(motion.div)`
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    min-height: auto;
    padding: 24px 0 0;
  }
`;
export const HabilitiesInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  .hability-desc {
    padding: 10px;
  }

  .habilities-colection {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 1023px) {
    .hability-desc {
      padding: 0px;
      line-height: 200%;
    }
  }
`;
