import { flexCenter } from "@/style/common";
import { styled, css } from "styled-components";

export const CardWrapper = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
`;

export const CardOuter = styled.div<{ $isFront: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(0deg)" : "rotateY(180deg)"};
  cursor: pointer;
  box-shadow: ${({ $isFront, theme }) =>
    $isFront
      ? `4px 4px 4px ${theme.COLOR["grey-2"]}`
      : `-4px 4px 4px ${theme.COLOR["grey-2"]}`};
  border-radius: 4px;
`;

export const CardInner = styled.div<{
  $cardTypeColor: string | null;
  $isFront: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: ${({ $isFront }) => ($isFront ? "8px 12px" : "0")};
  background-color: ${({ theme, $cardTypeColor }) =>
    $cardTypeColor ? $cardTypeColor : theme.COLOR["grey-3"]};
  border-radius: 4px;
  position: absolute;
  backface-visibility: hidden;
  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(0deg)" : "rotateY(180deg)"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  display: flex;
  justify-content: center;
  width: 170px;
  margin-top: 10px;
  gap: 10px;
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;

export const CardNumbersPart = styled.span<{ $isWhite: boolean }>`
  color: ${({ $isWhite }) => ($isWhite ? "white" : "black")};
`;

export const CardNumbersMasked = styled.span`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;

export const PasswordDot = styled.span<{ $isWhite: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ $isWhite }) => ($isWhite ? "white" : "black")};
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const LogoBox = styled.div<{ color: string }>`
  width: 36px;
  height: 22px;
  border-radius: 1.5px;
  display: flex;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{ $center?: boolean; $isWhite: boolean }>`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}
  background-color: transparent;
  color: ${({ $isWhite }) => ($isWhite ? "white" : "black")};
  width: 100%;
  flex-shrink: 1;
`;

export const CardCVCPart = styled.div`
  height: 24px;
  width: 212px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.COLOR["gold-2"]};
  margin-top: 75px;
  font-size: 14px;
`;

export const CVCNumberBox = styled.span`
  width: 45px;
  ${flexCenter}
`;
