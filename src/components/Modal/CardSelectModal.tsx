import { Modal } from "rian-modal-components";
import { CardCompanyType, CardCompanies } from "@/constants/cardCompany.ts";
import styled from "styled-components";
import DeleteIcon from "@/assets/deleteIcon.svg?react";
import { CardBrandType } from "@/constants/cardBrandType";
import { CardCompanyNames } from "@/constants/cardCompany.ts";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
`;

const OneCardCompanyBox = styled.div<{
  onClick: (brand: CardBrandType) => void;
}>`
  width: 58px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CardCompany = ({
  company,
  onClick,
}: {
  company: CardCompanyType;
  onClick: (brand: CardBrandType) => void;
}) => {
  const { name, logo: Logo } = company;
  return (
    <OneCardCompanyBox onClick={(brand: CardBrandType) => onClick(brand)}>
      <Logo />
      <h3>{name}</h3>
    </OneCardCompanyBox>
  );
};

export const CardCompaniesBox = ({
  onSelect,
}: {
  onSelect: (brand: CardBrandType) => void;
}) => {
  return (
    <Grid>
      {CardCompanies.map((company: CardCompanyType) => {
        const brand = company.name as CardCompanyNames;
        return (
          <CardCompany
            key={company.id}
            company={company}
            onClick={() => onSelect(brand)}
          />
        );
      })}
    </Grid>
  );
};

export const CardSelectModal = ({
  onSelect,
  onClose,
  isOpen,
}: {
  onSelect: (brand: CardBrandType) => void;
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <Modal isOpen={isOpen} size="small" position="center" onClose={onClose}>
      <Modal.Title> 카드사 선택 </Modal.Title>
      <Modal.CloseIcon onClick={onClose}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>
        <CardCompaniesBox onSelect={onSelect} />
      </Modal.Content>
    </Modal>
  );
};
