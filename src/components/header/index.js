import React from "react";
import { TitleContainer, MainTitle, Logo } from "./style";
function Header() {
  return (
    <TitleContainer>
      <Logo
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
      <MainTitle>로스트아크 숙제검사기</MainTitle>
    </TitleContainer>
  );
}

export default Header;
