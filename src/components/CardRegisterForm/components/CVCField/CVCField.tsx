import Input from "@/components/_common/Input/Input";
import InputField from "@/components/_common/InputField/InputField";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";
import React, { ChangeEvent, useState } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { useCVC } from "rian-card-validation-hooks";
interface Props {
  CVCNumbersState: ReturnType<typeof useCVC>;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCField = ({ CVCNumbersState, setIsFront }: Props) => {
  const { onChange, errorMessage, value } = CVCNumbersState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.CVC} />
      <InputField
        label={MESSAGE.INPUT_LABEL.CVC}
        errorMessages={[errorMessage || ""]}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          type="number"
          maxLength={VALID_LENGTH.CVC_NUMBERS}
          name={"cvc"}
          placeholder={MESSAGE.PLACEHOLDER.CVC}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsFront(false);
            onChange(e);
          }}
          onBlur={() => {
            setIsFront(true);
            setIsErrorShow(true);
          }}
          isError={!!(errorMessage || "").length}
          value={value}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.CVCNumbersState.errorMessage ===
      nextProps.CVCNumbersState.errorMessage &&
    prevProps.CVCNumbersState.value === nextProps.CVCNumbersState.value
  );
};

const CVCFieldMemo = React.memo(CVCField, arePropsEqual);
export default CVCFieldMemo;
