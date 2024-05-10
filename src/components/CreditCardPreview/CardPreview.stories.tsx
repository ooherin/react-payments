import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta = {
  title: "CreditCardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardBrandType: "BC카드",
    cardNumbers: ["1234", "1234", "1234", "1234"],
    expirationDate: {
      month: "01",
      year: "25",
    },
    ownerName: "RIAN OH",
    CVCNumbers: "123",
    isFront: true,
    setIsFront: () => {},
    cardBrand: "VISA",
  },
};
