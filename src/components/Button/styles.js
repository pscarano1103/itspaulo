import styled from "styled-components";
import { motion } from "motion/react";
export const ContainerButton = styled(motion.button)`
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
  transition: all 0.15s ease;

  &:hover {
    background-color: #222222;
    color: #d3e97a;
  }
`;
