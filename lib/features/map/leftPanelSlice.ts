import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface LeftPanelSlice {
  selectAutocompleteData: object;
  routeType: string;
}

// Define the initial state using that type
const initialState: LeftPanelSlice = {
  selectAutocompleteData: {},
  routeType: "none",
};

export const leftPanelSlice = createSlice({
  name: "leftPanel",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectAutocompleteData: (state, action) => {
      state.selectAutocompleteData = action.payload;
    },
    setRouteType: (state, action) => {
      if (action.payload === null) {
        state.routeType = "none";
      } else {
        state.routeType = action.payload;
      }
    },
  },
});

export const { setSelectAutocompleteData, setRouteType } = leftPanelSlice.actions;

export const selectMap = (state: RootState) => state.mainmap.value;

export default leftPanelSlice.reducer;
