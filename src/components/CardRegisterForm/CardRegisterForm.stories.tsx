import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInputs from "@/hooks/useInputs";
import { makeStringArray } from "@/utils/arrayHelper";
import { INPUT_COUNTS, MAX_LENGTH } from "@/constants/condition";

const CardRegisterFormWithHook = () => {
  const cardNumbersState = useInputs({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: MAX_LENGTH.CARD_NUMBERS,
  });

  const expiredDateState = useInputs({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxNumberLength: MAX_LENGTH.EXPIRATION_PERIOD,
  });

  const ownerNameState = useInputs({
    initialValue: makeStringArray(1),
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