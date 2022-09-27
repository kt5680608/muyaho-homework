import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export const GridContainer = styled(motion.div)`
  cursor: grab;
  height: 70%;
  padding: 36px 0;
  min-width: 100%;
  display: flex;
  width: min-content;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

export const Input = styled.input`
  background-color: white;
  height: 18px;
  padding: 6px;
  border: none;
  width: 96px;
  margin-right: 12px;
  border-radius: 6px;
`;

export const Button = styled(motion.div)`
  overflow: hidden;
  cursor: pointer;
  background-color: ${(props) => (props.type === "delete" ? "red" : "blue")};
  height: 18px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  padding: 6px;
  color: white;
  font-family: "REGULAR";
  border-radius: 24px;
`;

export const SubmitContainer = styled(motion.div)`
  height: 30px;
  width: 100%;
  background-color: ${(props) =>
    props.loading ? "var(--g-color-background)" : "#141414"};
  border-radius: 12px;
  padding: 12px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--g-color-background);
  display: flex;
  justify-content: center;
`;

export const CardKeyContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckIcon = styled(FaCheck)`
  color: white;
`;
