import { ChangeEventHandler, ReactNode } from "react";
import S from "./style";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessages: (string | null)[];
  children: ReactNode;
  label: string;
}

const InputField = ({ label, errorMessages, children }: Props) => {
  return (
    <S.InputFieldWrapper>
      <S.Label>{label}</S.Label>
      <S.InputsWrapper>{children}</S.InputsWrapper>
      <S.ErrorMessageWrapper>
        {errorMessages.find((e) => e)}
      </S.ErrorMessageWrapper>
    </S.InputFieldWrapper>
  );
};

export default InputField;

//[findFirstFilledElementIndex(errorMessages)];
