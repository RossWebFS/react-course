const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

export const deposit = (payload) => ({ type: "account/deposit", payload });
export const withdraw = (payload) => ({ type: "account/withdraw", payload });
export const requestLoan = (amount, purpose) => ({
  type: "account/requestLoan",
  payload: { amount, purpose },
});
export const payLoan = () => ({ type: "account/payLoan" });
