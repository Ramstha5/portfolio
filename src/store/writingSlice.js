import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PRO = [
  {
    id: "1",
    writing_image: "images/p1.png",
    date: "2023",
    title: "Integrating Algolia Search with WordPress Multisite",
  },
  {
    id: "2",
    writing_image: "images/p1.png",
    date: "2025",
    title: "Integrating Algolia Search with WordPress Multisite",
  },
];

const writingSlice = createSlice({
  name: "writing",
  initialState: DEFAULT_PRO,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});
export const writingAction = writingSlice.actions;
export default writingSlice;
