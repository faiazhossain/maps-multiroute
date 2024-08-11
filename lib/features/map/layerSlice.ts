import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface LayerSlice {
  allRoutes: any;
  osrmVanilla: Object;
  googleData: Object;
  osrmKenya: Object;
  selectLocationFrom: Object;
  selectLocationTo: Object;
}

// Define the initial state using that type
const initialState: LayerSlice = {
  allRoutes: [],
  osrmVanilla: {},
  googleData: {},
  osrmKenya: {},
  selectLocationFrom: {},
  selectLocationTo: {},
};

export const layerSlice = createSlice({
  name: "layerSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllRoutes: (state, action) => {
      if (action.payload === null) {
        state.allRoutes = [];
      } else if (Array.isArray(action.payload)) {
        state.allRoutes = [...state.allRoutes, ...action.payload];
      } else if (typeof action.payload === 'object') {
        state.allRoutes.push(action.payload);
      } else {
        console.error('Unexpected payload type for setAllRoutes:', typeof action.payload);
      }
    },
    setOsrmVanilla: (state, action) => {
      state.osrmVanilla = action.payload;
    },
    setOsrmKenya: (state, action) => {
      state.osrmKenya = action.payload;
    },
    setGoogleData: (state, action) => {
      state.googleData = action.payload;
    },
    setSelectLocationFrom: (state, action) => {
      state.selectLocationFrom = action.payload;
    },
    setSelectLocationTo: (state, action) => {
      state.selectLocationTo = action.payload;
    },
  },
});

export const {
  setAllRoutes,
  setOsrmVanilla,
  setOsrmKenya,
  setGoogleData,
  setSelectLocationFrom,
  setSelectLocationTo,
} = layerSlice.actions;

export const selectMap = (state: RootState) => state.mainmap.value;

export default layerSlice.reducer;
