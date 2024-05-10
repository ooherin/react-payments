import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";
import { useState } from "react";
import { useCardHolder } from "rian-card-validation-hooks";

const meta = {
  title: "CardRegisterForm/OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const OwnerNameFieldWithHook = () => {
  const cardHolderState = useCardHolder("");

  const [, setIsNameEntered] = useState<boolean>(false);

  return (
    <OwnerNameField
      setIsNameEntered={setIsNameEntered}
      cardHolderState={cardHolderState}
    />
  );
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  render: () => <OwnerNameFieldWithHook />,
};
