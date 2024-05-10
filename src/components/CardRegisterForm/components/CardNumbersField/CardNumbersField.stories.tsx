import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersField from "./CardNumbersField";
import { useMultiCardNumbers } from "rian-card-validation-hooks";

const meta = {
  title: "CardRegisterForm/CardNumbersField",
  component: CardNumbersField,
} satisfies Meta<typeof CardNumbersField>;

export default meta;

const CardNumbersStateWithHook = () => {
  const cardNumbersState = useMultiCardNumbers();
  return <CardNumbersField cardNumbersState={cardNumbersState} />;
};

type Story = StoryObj<typeof CardNumbersField>;

export const Default: Story = {
  render: () => <CardNumbersStateWithHook />,
};
