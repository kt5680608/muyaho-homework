import { createGlobalStyle } from "styled-components";
import BLACK from "./Pretendard-Black.woff2";
import REGULAR from "./Pretendard-Regular.woff2";
import RFLEXREGULAR from "./R-FLEX-REGULAR.woff2";
import RFLEXBLACK from "./R-FLEX-BLACK.woff2";
export const FontStyle = createGlobalStyle`		    
  @font-face {
    font-family: 'BLACK';	
    src: url(${BLACK}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
  @font-face{
    font-family: "REGULAR";
    src: url(${REGULAR}) format('woff2');
  }
  @font-face{
    font-family: "R-FLEX-REGULAR";
    src: url(${RFLEXREGULAR}) format('woff2');
  }
  @font-face{
    font-family: "R-FLEX-BLACK";
    src: url(${RFLEXBLACK}) format('woff2');
  }
  
`;
