import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

export const MainCardContainer = styled(motion.div)`
  min-width: 168px;
  height: 100%;
  background-color: #141414;
  border-radius: 12px;
  gap: 6px;
  padding: 12px 6px 12px 6px;
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
  justify-content: center;
  align-items: center;
`;
export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 12px;
  width: 100%;
  min-height: 20%;
`;

export const CardDetail = styled.div`
  display: flex;
  height: 24px;
  width: 66px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  visibility: ${(props) => props.level < props.limit && "hidden"};
`;
export const CardDetailInfo = styled.span`
  font-family: "REGULAR";
  font-size: 12px;
  margin-right: 8px;
`;
export const CharacterName = styled.h2`
  font-family: "BLACK";
  color: white;
  text-align: center;
  font-size: 14px;
`;

export const WorkInput = styled(motion.div)`
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "blue" : "white")};
  width: 8px;
  height: 8px;
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
