import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface MapSlice {
  value: number;
  bbox: object;
  routingApis: any;
  mouseEnteredMarker: object;
  selectedMarker: object;
  search: object;
  previouslySelectedValue: string;
}

// Define the initial state using that type
const initialState: MapSlice = {
  value: 0,
  bbox: {},
  routingApis: [],
  mouseEnteredMarker: {},
  selectedMarker: {},
  previouslySelectedValue: "",
  search: [],
};

export const mapSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setBbox: (state, action) => {
      state.bbox = action.payload;
    },
    setRoutingApis: (state, action) => {
      state.routingApis = action.payload;
    },
    setMouseEnteredMarker: (state, action) => {
      state.mouseEnteredMarker = action.payload;
    },
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPreviouslySelectedValue: (state, action) => {
      state.previouslySelectedValue = action.payload;
    },
  },
});

export const { setBbox, setRoutingApis, setMouseEnteredMarker, setSelectedMarker, setPreviouslySelectedValue, setSearch } =
  mapSlice.actions;

export const selectMap = (state: RootState) => state.mainmap.value;

export default mapSlice.reducer;
