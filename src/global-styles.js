import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
export const GlobalStyles = createGlobalStyle`
    :root {
        --g-color-black: #3A3A3A;
        --g-color-grey100: #616161;
        --g-color-grey50: #7F7F7F; 
        --g-color-background: #1a1a1a;
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
      overflow-x: hidden;
      align-items: center;
      margin: 0;
      padding: 0;
      
      @supports (-webkit-touch-callout: none) {
        min-height: -webkit-fill-available;
        }
      p{
            margin: 0;
            padding: 0;
        }
        hr{
        margin: 4px;
        width: 100%;
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
    }
    ul{
        list-style  : none;
        margin: 0;
        padding: 0;
    }
    input:focus{
        outline: none;
    }
    }
`;

export const MainTitle = styled.h1`
  font-family: "R-FLEX-BLACK", "BLACK";

  color: white;
  font-size: 36px;
`;
export const GridContainer = styled(motion.div)`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 24px;
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

export const SubmitContainer = styled(motion.div)`
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
export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
