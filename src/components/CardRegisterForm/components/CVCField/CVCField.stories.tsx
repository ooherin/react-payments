import type { Meta, StoryObj } from "@storybook/react";
import CVCField from "./CVCField";
import { useCVC } from "rian-card-validation-hooks";

const meta = {
  title: "CardRegisterForm/CVCField",
  component: CVCField,
} satisfies Meta<typeof CVCField>;

export default meta;

const CVCFieldWithHook = () => {
  const CVCNumbersState = useCVC("");

  return <CVCField CVCNumbersState={CVCNumbersState} setIsFront={() => {}} />;
};

type Story = StoryObj<typeof CVCField>;

export const Default: Story = {
  render: () => <CVCFieldWithHook />,
  argTypes: {},
};
