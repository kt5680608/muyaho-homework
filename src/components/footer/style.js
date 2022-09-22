import styled from "styled-components";
import { motion } from "framer-motion";
export const MainFooterContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoParagraph = styled(motion.p)`
  font-family: "R-FLEX-REGULAR", "REGULAR";
  color: white;
`;
export const RefreshButton = styled(motion.div)`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: sticky;
  top: 0;
  left: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141414;
`;
