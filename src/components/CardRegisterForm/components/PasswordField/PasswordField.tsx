import S from "../../style";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent, useState } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { usePassword } from "rian-card-validation-hooks";

interface Props {
  passwordState: ReturnType<typeof usePassword>;
}

const PasswordField = ({ passwordState }: Props) => {
  const { onChange, errorMessage, value } = passwordState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.PASSWORD} />
      <InputField
        label={MESSAGE.INPUT_LABEL.PASSWORD}
        errorMessages={[errorMessage || ""]}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          type="password"
          maxLength={VALID_LENGTH.PASSWORD}
          placeholder={MESSAGE.PLACEHOLDER.PASSWORD}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          isError={!!(errorMessage || "").length}
          onBlur={() => {
            setIsErrorShow(true);
          }}
          value={value}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.passwordState.errorMessage ===
      nextProps.passwordState.errorMessage &&
    prevProps.passwordState.value === nextProps.passwordState.value
  );
};

const PasswordFieldMemo = React.memo(PasswordField, arePropsEqual);
export default PasswordFieldMemo;
