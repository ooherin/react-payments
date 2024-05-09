import CardPreviewBack from "./components/CardPreviewBack";
import CardPreviewFront from "./components/CardPreviewFront";
import S from "./style";
import { CardBrandType } from "@/constants/cardBrandType";

interface FrontProps {
  cardBrandType: CardBrandType | null;
  cardNumbers: string;
  expirationDate: { month: string; year: string };
  ownerName: string | null;
  CVCNumbers: string;
  isFront: boolean;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
  cardBrand: string;
}

interface BackProps {
  CVCNumbers: string;
}

const CardPreview = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardBrandType,
  CVCNumbers,
  isFront,
  setIsFront,
  cardBrand,
}: FrontProps & BackProps) => {
  const onFlipCard = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <S.CardWrapper>
      <S.CardOuter $isFront={isFront} onClick={onFlipCard}>
        <CardPreviewFront
          cardBrandType={cardBrandType}
          expirationDate={expirationDate}
          ownerName={ownerName}
          cardNumbers={cardNumbers}
          cardBrand={cardBrand}
        />
        <CardPreviewBack CVCNumbers={CVCNumbers} />
      </S.CardOuter>
    </S.CardWrapper>
  );
};

export default CardPreview;
