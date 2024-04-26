import type { Meta, StoryObj } from "@storybook/react";
import ExpirationPeriodField from "./ExpirationPeriodField";

const meta = {
  title: "ExpirationPeriodField",
  component: ExpirationPeriodField,
} satisfies Meta<typeof ExpirationPeriodField>;

export default meta;

const expirationPeriodState = {
  values: {
    expirationMonth: "",
    expirationYear: "",
  },
  onChange: () => {},
  errors: {},
  setValues: () => {},
  isError: false,
  setErrors: () => {},
};

type Story = StoryObj<typeof ExpirationPeriodField>;

export const Default: Story = {
  args: {
    expirationPeriodState,
  },
};
