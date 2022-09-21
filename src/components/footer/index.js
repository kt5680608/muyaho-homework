import React, { useState, useEffect } from "react";
import {
  FooterInfoParagraph,
  MainFooterContainer,
  RefreshButton,
} from "./style";
import { useAnimation } from "framer-motion";

import { IoMdRefresh } from "react-icons/io";
function Footer(props) {
  const [isHover, setIsHover] = useState(false);
  const copyrightAnimation = useAnimation();
  const errorMessageAnimation = useAnimation();

  useEffect(() => {
    if (isHover) {
      copyrightAnimation.start({ y: -60, display: "none" });
      errorMessageAnimation.start({ y: 0, display: "block" });
    } else {
      copyrightAnimation.start({ y: 0, display: "block" });
      errorMessageAnimation.start({ y: 60, display: "none" });
    }
  }, [isHover]);
  return (
    <MainFooterContainer>
      <FooterInfoParagraph animate={copyrightAnimation}>
        Copyright 2022. 2초만기다려주세요 All Rights Reserved.
      </FooterInfoParagraph>
      <FooterInfoParagraph animate={errorMessageAnimation}>
        에러가 발생하셨나요? 버튼을 클릭하시면 모든 데이터가 초기화됩니다.
      </FooterInfoParagraph>
      <RefreshButton
        onClick={() => {
          props.hardReset();
        }}
        whileHover={{ rotate: 360, scale: 1.2 }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <IoMdRefresh style={{ color: "white" }} size={24} />
      </RefreshButton>
    </MainFooterContainer>
  );
}
export default Footer;
