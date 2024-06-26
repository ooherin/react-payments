import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent, useState } from "react";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputRefs from "@/hooks/useInputRefs";
import { hasInactiveInputError } from "@/utils/view";
import { useExpiryDate } from "rian-card-validation-hooks";

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

interface Props {
  expirationPeriodState: ReturnType<typeof useExpiryDate>;
}

type InputConfigType = {
  name: "month" | "year";
  placeholder: string;
};

const expirationInputConfigs: InputConfigType[] = [
  {
    name: "month",
    placeholder: MESSAGE.PLACEHOLDER.EXPIRATION_MONTH,
  },
  {
    name: "year",
    placeholder: MESSAGE.PLACEHOLDER.EXPIRATION_YEAR,
  },
];

const ExpirationPeriodField = ({ expirationPeriodState }: Props) => {
  const { onChange, errorMessages, values } = expirationPeriodState;
  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );
  const [isErrorShow, setIsErrorShow] = useState(
    hasInactiveInputError(errorMessages)
  );

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
        errorMessages={Object.values(errorMessages)}
        isErrorShow={isErrorShow}
      >
        {expirationInputConfigs.map(
          (inputConfig: InputConfigType, index: number) => {
            const { name, placeholder } = inputConfig;

            return (
              <>
                <Input
                  autoFocus={index === 0}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="number"
                  key={index}
                  name={name}
                  placeholder={placeholder}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onFocusNextInput(e, index);
                  }}
                  isError={
                    name === "month"
                      ? !!errorMessages.month
                      : !!errorMessages.year
                  }
                  onBlur={() => setIsErrorShow(true)}
                  value={name === "month" ? values.month : values.year}
                />
              </>
            );
          }
        )}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.expirationPeriodState.errorMessages ===
      nextProps.expirationPeriodState.errorMessages &&
    prevProps.expirationPeriodState.values ===
      nextProps.expirationPeriodState.values
  );
};

const ExpirationPeriodFieldMemo = React.memo(
  ExpirationPeriodField,
  arePropsEqual
);

export default ExpirationPeriodFieldMemo;
