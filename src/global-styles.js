import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export const GlobalStyles = createGlobalStyle`
    :root {
        --g-color-black: #3A3A3A;
        --g-color-grey100: #616161;
        --g-color-grey50: #7F7F7F; 
        --g-color-background: #1a1a1a;
        --g-color-logo: #a2ff55;
        --system-color-codeTint1: #fc6;
        --system-color-codeTint2: #adf;
        --system-color-codeTint3: #f97;
        --system-color-codeTint4: #2cd;
        --system-color-codeTint5: #b8f;
        --system-color-codeTint6: #0bf;
        --system-palette-purpleLight: hsl(259, 100%, 71%)
    }
    html{
        margin: 0;
        padding: 0;
        font-size: 16px;   
        background-color: #1a1a1a;
    }
    body{
      display: flex;
      justify-content: center;
      background-color: #1a1a1a;
      max-width: 100vw;
      flex-direction: column;
      align-items: center;
      margin: 0;
      overflow: hidden;
      padding: 0;
      
      @supports (-webkit-touch-callout: none) {
        min-height: -webkit-fill-available;
        }
    
      p{
            margin: 0;
            padding: 0;
        }
        pre{
        margin: 0;
        line-height: 1.5;
    }
    
    
    h1{
        font-family:   sans-serif;
        margin: 0;
        padding: 0;   
    }

    hr{
        margin: 6px 0;
        width: 100%;
        border: 1px solid var(--g-color-background)
        }
    h2{
      margin: 0;
      padding: 0;
    }
    ul{
      display: flex;
      align-items: space-evenly;
      grid-gap: 12px;
      width: 100%;
      height: 100%
    }
    
    p{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
        height: min-content;
    }
    ul{
        list-style  : none;
        margin: 0;
        padding: 0;
        width: min-content;
    }
    input:focus{
        outline: none;
    }
    }
`;

export const GridContainer = styled(motion.div)`
  height: 70%;
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
