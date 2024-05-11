import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import useInput from "@/hooks/useInput";
import { CardBrandType, CardBrandTypeColor } from "@/constants/cardBrandType";
import React, { useState } from "react";
import { CardSelectModal } from "@/components/Modal/CardSelectModal";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";

interface Props {
  cardBrandState: ReturnType<typeof useInput<CardBrandType | null>>;
}

const CardBrandSelectField = ({ cardBrandState }: Props) => {
  const { value, setValue } = cardBrandState;

  const [isCardCompanySelectModalOpen, setIsCardCompanySelectModalOpen] =
    useState(false);

  const onCloseModal = () => {
    setIsCardCompanySelectModalOpen(false);
  };

  const onOpenModal = () => {
    setIsCardCompanySelectModalOpen(true);
  };

  const onSelectBrand = (brand: CardBrandType) => {
    setValue(brand);
    onCloseModal();
  };

  console.log("value", value);
  return (
    <S.InputFieldWithInfo>
      <CardSelectModal
        isOpen={isCardCompanySelectModalOpen}
        onClose={onCloseModal}
        onSelect={onSelectBrand}
      />
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_TYPE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_TYPE}
      />
      <InputField errorMessages={[]}>
        <BasicButton
          textColor={
            value === "카카오뱅크" || value === null
              ? theme.COLOR["grey-3"]
              : "white"
          }
          onClick={onOpenModal}
          backgroundColor={value ? CardBrandTypeColor[value] : "white"}
          height={40}
          borderType="round"
          disabled={false}
          position="basic"
          borderColor={theme.COLOR["grey-4"]}
        >
          {value || "카드사를 선택해주세요."}
        </BasicButton>
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.cardBrandState.value === nextProps.cardBrandState.value;
};

const CardBrandSelectFieldMemo = React.memo(
  CardBrandSelectField,
  arePropsEqual
);
export default CardBrandSelectFieldMemo;
