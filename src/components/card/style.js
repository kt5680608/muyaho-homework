import styled from "styled-components";
import { motion } from "framer-motion";
export const MainCardContainer = styled(motion.div)`
  margin: 0;
  width: 70%;
  background-color: #141414;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  width: 100%;
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CardDetailInfo = styled.span`
  font-family: "REGULAR";
`;
export const CharacterName = styled.h2`
  font-family: "BLACK";
  color: white;
  margin: 24px 24px 72px 24px;
`;

export const WorkInput = styled(motion.div)`
  border: none;
  background-color: ${(props) => (props.checked ? "blue" : "white")};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

export const MainTitle = styled.h1`
  font-family: "R-FLEX-BLACK", "BLACK";

  color: white;
  font-size: 24px;
`;
export const GridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const Input = styled.input`
  background-color: white;
  height: 24px;
  padding: 6px;
  border: none;
  border-radius: 24px;
  margin: 18px;
`;

export const Button = styled.div`
  background-color: blue;
  box-sizing: border-box;
  height: 36px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 12px;
  color: white;
  font-family: "REGULAR";
  border-radius: 24px;
`;

export const TitleContainer = styled.div`
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitContainer = styled.div`
  height: 396px;
  width: 20vw;
  background-color: #141414;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
