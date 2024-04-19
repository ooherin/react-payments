import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInput from "@/hooks/useInput";
import { makeStringArray } from "../utils/arrayHelper";
import { INPUT_COUNTS, MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import { validateExpirationDate, validateOwnerName } from "../utils/validation";

const CardRegisterFormWithHook = () => {
  const cardNumbersState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: MAX_LENGTH.CARD_NUMBERS,
    validLength: VALID_LENGTH.CARD_NUMBERS,
  });

  const expiredDateState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxNumberLength: MAX_LENGTH.EXPIRATION_PERIOD,
    validLength: VALID_LENGTH.EXPIRATION_PERIOD,
    onBlurValidate: validateExpirationDate,
  });

  const ownerNameState = useInput({
    initialValue: makeStringArray(1),
    onChangeValidate: validateOwnerName,
  });

  return (
    <CardRegisterForm
      cardNumbersState={cardNumbersState}
      expiredPeriodState={expiredDateState}
      ownerNameState={ownerNameState}
    />
  );
};

const meta = {
  title: "CardRegisterForm",
  component: CardRegisterForm,
} satisfies Meta<typeof CardRegisterForm>;

export default meta;

type Story = StoryObj<typeof CardRegisterForm>;

export const Default: Story = {
  render: () => <CardRegisterFormWithHook />,
};
