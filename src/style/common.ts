import { css, createGlobalStyle } from "styled-components";

// 전역 스타일로 @keyframes 정의
export const GlobalStyles = createGlobalStyle`
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fadeInAnimation = css`
  animation: fadeInAnimation 1s ease-out forwards;
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
