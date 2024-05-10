import { CardBrandType } from "@/constants/cardBrandType";
import * as S from "../style";
import React from "react";

const CardPreviewNumbers = ({
  cardNumbers,
  cardBrandType,
}: {
  cardNumbers: string[];
  cardBrandType: CardBrandType | null;
}) => {
  return (
    <S.CardNumbers>
      {cardNumbers.map((number: string, index) => {
        const isMasked = index >= 2;
        return isMasked ? (
          <S.CardNumbersMasked>
            {Array.from({ length: number.length }).map((e, index) => (
              <S.PasswordDot
                $isWhite={cardBrandType !== "카카오뱅크"}
                key={index}
              />
            ))}
          </S.CardNumbersMasked>
        ) : (
          <S.CardNumbersPart
            $isWhite={cardBrandType !== "카카오뱅크"}
            key={index}
          >
            {number}
          </S.CardNumbersPart>
        );
      })}
    </S.CardNumbers>
  );
};

const CardPreviewNumbersMemo = React.memo(CardPreviewNumbers);
export default CardPreviewNumbersMemo;
