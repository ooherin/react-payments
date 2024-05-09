import S from "./style";
import useInput from "@/hooks/useInput";
import { REGISTER_STEP } from "@/constants/condition";
import { CardBrandType } from "@/constants/cardBrandType";
import ExpirationPeriodFieldMemo from "./components/ExpirationPeriodField/ExpirationPeriodField";
import CardNumbersFieldMemo from "./components/CardNumbersField/CardNumbersField";
import OwnerNameFieldMemo from "./components/OwnerNameField/OwnerNameField";
import CVCFieldMemo from "./components/CVCField/CVCField";
import PasswordFieldMemo from "./components/PasswordField/PasswordField";
import CardBrandSelectFieldMemo from "./components/CardBrandSelectField/CardBrandSelectField";
import {
  useCardHolder,
  useExpiryDate,
  useMultiCardNumbers,
  useCVC,
  usePassword,
} from "rian-card-validation-hooks";

interface Props {
  cardNumbersState: ReturnType<typeof useMultiCardNumbers>;
  expirationPeriodState: ReturnType<typeof useExpiryDate>;
  cardHolderState: ReturnType<typeof useCardHolder>;
  CVCNumbersState: ReturnType<typeof useCVC>;
  passwordState: ReturnType<typeof usePassword>;
  cardBrandState: ReturnType<typeof useInput<CardBrandType | null>>;
  formProgress: number;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNameEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expirationPeriodState,
  cardHolderState,
  CVCNumbersState,
  passwordState,
  cardBrandState,
  formProgress,
  setIsFront,
  setIsNameEntered,
}: Props) => {
  return (
    <S.CardFormWrapper>
      {formProgress >= REGISTER_STEP.PASSWORD && (
        <PasswordFieldMemo passwordState={passwordState} />
      )}
      {formProgress >= REGISTER_STEP.CVC && (
        <CVCFieldMemo
          CVCNumbersState={CVCNumbersState}
          setIsFront={setIsFront}
        />
      )}
      {formProgress >= REGISTER_STEP.OWNER_NAME && (
        <OwnerNameFieldMemo
          cardHolderState={cardHolderState}
          setIsNameEntered={setIsNameEntered}
        />
      )}
      {formProgress >= REGISTER_STEP.EXPIRATION_PERIOD && (
        <ExpirationPeriodFieldMemo
          expirationPeriodState={expirationPeriodState}
        />
      )}
      {formProgress >= REGISTER_STEP.CARD_BRAND && (
        <CardBrandSelectFieldMemo cardBrandState={cardBrandState} />
      )}
      <CardNumbersFieldMemo cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
