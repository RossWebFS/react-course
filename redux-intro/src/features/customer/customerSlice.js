const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalId) => ({
  type: "customer/createCustomer",
  payload: { fullName, nationalId, createdAt: new Date().toISOString() },
});

export const updateCustomer = (payload) => ({
  type: "customer/updateCustomer",
  payload,
});
