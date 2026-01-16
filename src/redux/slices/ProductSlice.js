import { createSlice } from "@reduxjs/toolkit";
import tvData from "../../data/tvData";
import mobileData from "../../data/mobileData";
import fridgeData from "../../data/fridgeData";

const initialState = {
  tv: tvData,
  mobiles: mobileData,
  refrigerators: fridgeData,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
