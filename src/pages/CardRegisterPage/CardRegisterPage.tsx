import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CardPreview from "@/components/CreditCardPreview/CardPreview";
import { useState } from "react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";
import { useNavigate } from "react-router-dom";
import useCardRegister from "@/hooks/useCardRegister";
import { ROUTE_URL } from "@/constants/url";
import { REGISTER_STEP } from "@/constants/condition";
import useFormProgress from "@/hooks/useFormProgress";
import ProgressBar from "@/components/_common/ProgressBar/ProgressBar";

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const cardRegisterInfo = useCardRegister();
  const {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    cardHolderState,
  } = cardRegisterInfo;

  const [isFront, setIsFront] = useState<boolean>(true);
  const [isNameEntered, setIsNameEntered] = useState<boolean>(false);

  const isValidatedArr = [
    !!(
      !cardNumbersState.errorMessage &&
      (cardNumbersState.formattedNumbers[0] || "").length
    ),
    cardBrandState.isValidated,
    !!(
      !expirationPeriodState.errorMessages.month &&
      !expirationPeriodState.errorMessages.year &&
      expirationPeriodState.values.month &&
      expirationPeriodState.values.year
    ),
    !cardHolderState.errorMessage && !!cardHolderState.value,
    !CVCNumbersState.errorMessage && !!CVCNumbersState.value,
    !passwordState.errorMessage && !!passwordState.value,
  ];

  const { progressCompleted, formProgress } = useFormProgress({
    isValidatedArr,
    isNameEntered,
  });

  const onSubmitCardInfo = () => {
    navigate(ROUTE_URL.REGISTER_CONFIRM, {
      state: {
        startNumbers: cardNumbersState.formattedNumbers[0],
        cardType: cardBrandState.value,
      },
    });

    const cardRegisterInfo = {
      cardNumbers: cardNumbersState.formattedNumbers.join(""),
      expirationNumbers: expirationPeriodState.values,
      cardBrandState: cardBrandState.value,
      ownerName: cardHolderState.value,
      CVCNumbersState: CVCNumbersState.value,
      passwordState: passwordState.value,
    };

    console.log(cardRegisterInfo);
  };

  return (
    <S.CardRegisterWrapper>
      <ProgressBar
        currentStep={formProgress}
        fullStep={REGISTER_STEP.ALL_PASSED}
      />
      <S.FlexWrapper>
        <CardPreview
          cardBrandType={cardBrandState.value}
          cardNumbers={cardNumbersState.formattedNumbers}
          expirationDate={expirationPeriodState.values}
          ownerName={cardHolderState.value}
          CVCNumbers={CVCNumbersState.value}
          isFront={isFront}
          setIsFront={setIsFront}
          cardBrand={cardNumbersState.cardBrand}
        />
        <CardRegisterForm
          {...cardRegisterInfo}
          formProgress={formProgress}
          setIsFront={setIsFront}
          setIsNameEntered={setIsNameEntered}
        />
      </S.FlexWrapper>
      {formProgress === REGISTER_STEP.ALL_PASSED && progressCompleted && (
        <BasicButton
          borderType="square"
          position="bottom"
          height={52}
          disabled={formProgress !== REGISTER_STEP.ALL_PASSED}
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
