import styled from "styled-components";
import { motion } from "framer-motion";

export const Circle = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
`;

export const Spinner = styled(motion.div)`
  width: 36px;
  height: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
