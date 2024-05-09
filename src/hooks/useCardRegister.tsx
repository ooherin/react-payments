import useInput from "./useInput";
import { CardBrandType } from "@/constants/cardBrandType";
import {
  useExpiryDate,
  useMultiCardNumbers,
  useCardHolder,
  useCVC,
  usePassword,
} from "rian-card-validation-hooks";

const useCardRegister = () => {
  const cardNumbersState = useMultiCardNumbers();
  const expirationPeriodState = useExpiryDate({ month: "", year: "" });
  const cardHolderState = useCardHolder("");
  const CVCNumbersState = useCVC("");
  const passwordState = usePassword("");
  const cardBrandState = useInput<CardBrandType | null>({
    initialValue: null,
  });

  return {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    cardHolderState,
  };
};

export default useCardRegister;
