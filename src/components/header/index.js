import React from "react";
import { TitleContainer, MainTitle, Logo } from "./style";
function Header() {
  return (
    <TitleContainer>
      <Logo
        whileHover={{ scale: 1.3, rotate: 360 }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 100,
            behavior: "smooth",
          });
        }}
      />
      <MainTitle>로스트아크 숙제검사기</MainTitle>
    </TitleContainer>
  );
}

export default Header;
