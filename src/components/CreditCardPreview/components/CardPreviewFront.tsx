import S from "../style";
import { theme } from "@/style/theme";
import { CardBrandType, CardBrandTypeColor } from "@/constants/cardBrandType";
import CardPreviewLogo from "./CardPreviewLogo";
import CardPreviewNumbersMemo from "./CardPreviewNumbers";

interface Props {
  cardBrandType: CardBrandType | null;
  cardNumbers: string;
  expirationDate: { month: string; year: string };
  ownerName: string | null;
  cardBrand: string;
}

const CardPreviewFront = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardBrandType,
  cardBrand,
}: Props) => {
  const cardTypeColor = cardBrandType
    ? CardBrandTypeColor[cardBrandType]
    : null;

  return (
    <S.CardInner $cardTypeColor={cardTypeColor} $isFront={true}>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR["gold-1"]}></S.LogoBox>
        <CardPreviewLogo cardNumbers={cardNumbers} />
        <div>{cardBrand}</div>
      </S.FlexBox>

      <S.CreditCardInfo>
        <CardPreviewNumbersMemo
          cardBrandType={cardBrandType}
          cardNumbers={cardNumbers}
        />
        <S.Input
          $isWhite={cardBrandType !== "카카오뱅크"}
          type="text"
          value={
            expirationDate.month &&
            [expirationDate.month, expirationDate.year].join("/")
          }
          readOnly
        />
        <S.Input
          $isWhite={cardBrandType !== "카카오뱅크"}
          type="text"
          value={ownerName ? ownerName : ""}
          readOnly
        />
      </S.CreditCardInfo>
    </S.CardInner>
  );
};

export default CardPreviewFront;
