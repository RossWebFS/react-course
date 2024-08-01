import { connect } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";

const mapStateToProps = (state) => {
  return {
    balance: state.account.balance,
  };
};

export const BalanceDisplay = connect(mapStateToProps)(({ balance }) => {
  return <div className="balance">{formatCurrency(balance)}</div>;
});
