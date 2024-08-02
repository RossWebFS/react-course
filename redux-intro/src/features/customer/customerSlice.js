import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName, nationalId) => ({
        payload: { fullName, nationalId, createdAt: new Date().toISOString() },
      }),

      reducer: (state, action) => {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateUser: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;

export const { createCustomer, updateCustomer } = customerSlice.actions;
