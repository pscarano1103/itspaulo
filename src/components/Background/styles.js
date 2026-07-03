import styled from "styled-components";
import { motion } from "motion/react";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(180deg, #050816 0%, #0b1120 60%, #020617 100%);
`;

export const BlobOne = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #a9ff8f;
  border-radius: 50%;
  filter: blur(180px);
  opacity: 0.18;
  top: -150px;
  left: -100px;
  animation: blob1 18s ease infinite alternate;

  @keyframes blob1 {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(200px, 150px);
    }
  }
`;

export const BlobTwo = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #92ff60;
  border-radius: 50%;
  filter: blur(180px);
  opacity: 0.15;
  bottom: -120px;
  right: -80px;
  animation: blob2 20s ease infinite alternate;

  @keyframes blob2 {
    from {
      transform: translate(0);
    }

    to {
      transform: translate(-180px, -120px);
    }
  }
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
`;

export const Noise = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,...");
`;
