import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";
import useInput from "@/hooks/useInput";
import {
  validateDoubleSpace,
  validateEnterRequired,
  validateOwnerName,
} from "@/utils/validation";

const meta = {
  title: "OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const OwnerNameFieldWithHook = () => {
  const ownerNameState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateOwnerName(value),
      (value: string) => validateDoubleSpace(value),
      () => validateEnterRequired(),
    ],
  });

  return <OwnerNameField ownerNameState={ownerNameState} />;
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  render: () => <OwnerNameFieldWithHook />,
};
