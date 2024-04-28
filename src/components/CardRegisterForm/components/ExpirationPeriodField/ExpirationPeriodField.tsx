import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import { ChangeEvent } from "react";
import useInputs from "@/hooks/useInputs";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputRefs from "@/hooks/useInputRefs";

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

interface Props {
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
}

const EXPIRATION_INPUTS_NAMES: (keyof ExpirationPeriodInputType)[] = [
  "expirationMonth",
  "expirationYear",
];

const ExpirationPeriodField = ({ expirationPeriodState }: Props) => {
  const { onChange, errors } = expirationPeriodState;

  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
        errorMessages={Object.values(errors)}
      >
        {new Array(INPUT_COUNTS.EXPIRATION_PERIOD)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              autoFocus={index === 0}
              ref={(el) => (inputRefs.current[index] = el)}
              type="number"
              key={index}
              name={EXPIRATION_INPUTS_NAMES[index]}
              placeholder={MESSAGE.EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onFocusNextInput(e, index);
              }}
              isError={!!errors[EXPIRATION_INPUTS_NAMES[index]]}
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default ExpirationPeriodField;
