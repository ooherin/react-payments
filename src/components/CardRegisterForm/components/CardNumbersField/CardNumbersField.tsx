import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import Input from "@/components/_common/Input/Input";
import React from "react";
import InputFieldMemo from "@/components/_common/InputField/InputField";
import { useMultiCardNumbers } from "rian-card-validation-hooks";

export type CardNumberInputType = {
  cardNumbers1: string;
  cardNumbers2: string;
  cardNumbers3: string;
  cardNumbers4: string;
};

interface Props {
  cardNumbersState: ReturnType<typeof useMultiCardNumbers>;
}

const CardNumbersField = ({ cardNumbersState }: Props) => {
  const { onChange, formattedNumbers, errorMessage } = cardNumbersState;

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputFieldMemo
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={[errorMessage || ""]}
        isErrorShow={!!errorMessage}
      >
        <Input
          width={"100%"}
          onChange={onChange}
          value={formattedNumbers.join("-")}
          isError={!!errorMessage}
        />
      </InputFieldMemo>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.cardNumbersState.formattedNumbers ===
      nextProps.cardNumbersState.formattedNumbers &&
    prevProps.cardNumbersState.errorMessage ===
      nextProps.cardNumbersState.errorMessage
  );
};

const CardNumbersFieldMemo = React.memo(CardNumbersField, arePropsEqual);
export default CardNumbersFieldMemo;
