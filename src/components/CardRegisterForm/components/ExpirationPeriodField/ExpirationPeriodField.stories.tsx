import type { Meta, StoryObj } from "@storybook/react";
import ExpirationPeriodField from "./ExpirationPeriodField";
import { useExpiryDate } from "rian-card-validation-hooks";

const meta = {
  title: "CardRegisterForm/ExpirationPeriodField",
  component: ExpirationPeriodField,
} satisfies Meta<typeof ExpirationPeriodField>;

export default meta;

const ExpirationPeriodFieldWithHook = () => {
  const expirationPeriodState = useExpiryDate({ month: "", year: "" });

  return (
    <ExpirationPeriodField expirationPeriodState={expirationPeriodState} />
  );
};

type Story = StoryObj<typeof ExpirationPeriodField>;

export const Default: Story = {
  render: () => <ExpirationPeriodFieldWithHook />,
};
