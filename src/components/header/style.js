import styled from "styled-components";

export const TitleContainer = styled.div`
  color: var(--g-color-background);
  width: 100%;
  background-color: var(--g-color-background);
  height: 60px;
  display: flex;
  margin: 0 12px 0 12px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const MainTitle = styled.h1`
  font-family: "REGULAR";
  color: white;
  font-size: 16px;
`;

export const Logo = styled.div`
  width: 36px;
  height: 36px;
  background-color: var(--g-color-logo);
  background-image: url("/logo.png");
  background-size: cover;
  border-radius: 50%;
`;
