import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeData: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeData: (state, action) => {
      state.employeeData = action.payload;
    },
    setRemoveEmployeData: (state, action) => {
      state.employeeData = null;
    },
  },
});

export const employeActions = employeeSlice.actions;

export default employeeSlice.reducer;
