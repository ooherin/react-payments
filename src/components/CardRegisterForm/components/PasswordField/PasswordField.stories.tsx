import type { Meta, StoryObj } from "@storybook/react";
import PasswordField from "./PasswordField";
import { usePassword } from "rian-card-validation-hooks";

const meta = {
  title: "CardRegisterForm/PasswordField",
  component: PasswordField,
} satisfies Meta<typeof PasswordField>;

export default meta;

const PasswordFiledWithHook = () => {
  const passwordState = usePassword("");
  return <PasswordField passwordState={passwordState} />;
};
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: () => <PasswordFiledWithHook />,
};
