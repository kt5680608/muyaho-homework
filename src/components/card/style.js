import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

export const MainCardContainer = styled(motion.div)`
  margin: 0;
  height: 360px;
  width: 100%;
  background-color: #141414;
  border-radius: 24px;
  gap: 24px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeaderContainer = styled(motion.div)`
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 18px;
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
  font-size: 14px;
  margin-right: 8px;
`;
export const CharacterName = styled.h2`
  font-family: "BLACK";
  color: white;
  flex-basis: 100%;
  text-align: center;
`;

export const WorkInput = styled(motion.div)`
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "blue" : "white")};
  width: 10px;
  height: 10px;
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
  margin: 6px;
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

export const TrashIconButton = styled(motion.div)`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border-radius: 50%;
`;
export const TrashIcon = styled(FaTrashAlt)`
  color: white;
`;
