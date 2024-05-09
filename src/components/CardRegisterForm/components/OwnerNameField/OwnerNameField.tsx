import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent, useState } from "react";
import { MAX_LENGTH } from "@/constants/condition";
import { useCardHolder } from "rian-card-validation-hooks";

interface Props {
  cardHolderState: ReturnType<typeof useCardHolder>;
  setIsNameEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const OwnerNameField = ({ cardHolderState, setIsNameEntered }: Props) => {
  const { onChange, errorMessage, value } = cardHolderState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  const onEnterCompleted = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsNameEntered(true);
    }
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={[errorMessage || ""]}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={!!(errorMessage || "").length}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            onEnterCompleted(e)
          }
          onFocus={() => setIsErrorShow(true)}
          onBlur={() => {
            setIsErrorShow(true);
            setIsNameEntered(true);
          }}
          value={value}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.cardHolderState.errorMessage ===
      nextProps.cardHolderState.errorMessage &&
    prevProps.cardHolderState.value === nextProps.cardHolderState.value
  );
};

const OwnerNameFieldMemo = React.memo(OwnerNameField, arePropsEqual);
export default OwnerNameFieldMemo;
