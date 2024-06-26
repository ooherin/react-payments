const COLOR = {
  "grey-1": "#8B95A1", //인풋 설명
  "grey-2": "#ACACAC", //인풋 내부
  "grey-3": "#333333", //카드 색상
  "grey-4": "#c9c9c9",
  "grey-5": "#D5D5D5", //카드 뒷면
  error: "#ff3d3d",
  "gold-1": "#DDCD78", //카드 프리뷰 칩
  "gold-2": "#CBBA64", //카드 프리뷰 뒷변 CVC 부분
};

export const theme = {
  COLOR,
};

export type ThemeType = typeof theme;
