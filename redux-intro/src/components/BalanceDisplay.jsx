import { formatCurrency } from "../utils/formatCurrency";

export const BalanceDisplay = () => {
  return <div className="balance">{formatCurrency(123456)}</div>;
};
