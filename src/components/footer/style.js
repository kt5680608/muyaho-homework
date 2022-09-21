import styled from "styled-components";
import { motion } from "framer-motion";
export const MainFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 60px;
  background-color: var(--g-color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: 12px 0 12px 0;
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
