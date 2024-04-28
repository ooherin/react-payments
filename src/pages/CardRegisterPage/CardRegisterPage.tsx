import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CardPreview from "@/components/CreditCardPreview/CardPreview";
import { useState } from "react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";
import { useNavigate } from "react-router-dom";
import useCardRegister from "@/hooks/useCardRegister";
import { ROUTE_URL } from "@/constants/url";

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const cardRegister = useCardRegister();
  const {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    ownerNameState,
  } = cardRegister;

  const [step, setStep] = useState<number>(1);
  const [isFront, setIsFront] = useState<boolean>(true);

  const onSubmitCardInfo = () => {
    navigate(ROUTE_URL.REGISTER_CONFIRM, {
      state: {
        startNumbers: cardNumbersState.values.cardNumbers1,
        cardType: cardBrandState.value,
      },
    });
  };

  const stepPassedArr = [
    !cardNumbersState.isError,
    !!cardBrandState.value?.length,
    !expirationPeriodState.isError,
    !ownerNameState.isError,
    !CVCNumbersState.isError,
    !passwordState.isError,
  ];

  const allPassed = stepPassedArr.every((isCompleted) => isCompleted === true);
  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CardPreview
          cardBrandType={cardBrandState.value}
          cardNumbers={cardNumbersState.values}
          expirationDate={expirationPeriodState.values}
          ownerName={ownerNameState.value}
          CVCNumbers={CVCNumbersState.value}
          isFront={isFront}
          setIsFront={setIsFront}
        />
        <CardRegisterForm
          {...cardRegister}
          step={step}
          setStep={setStep}
          stepPassedArr={stepPassedArr}
          setIsFront={setIsFront}
        />
      </S.FlexWrapper>
      {step === 7 && allPassed && (
        <BasicButton
          borderType="square"
          position="bottom"
          height={52}
          disabled={step !== 7}
          backgroundColor={theme.COLOR["grey-3"]}
          onClick={onSubmitCardInfo}
        >
          확인
        </BasicButton>
      )}
    </S.CardRegisterWrapper>
  );
};

export default CardRegisterPage;
