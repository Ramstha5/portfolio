import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_EXP = [
  {
    id: "1",
    date: "2025 - PRESENT",
    position: "Senior Frontend Engineer, Accessibility ·",
    project_name: "Daraz",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend...",
    language: {
      language_name: ["HTML", "Bootstrap", "React","JavaScript"],
    },
  },
  {
    id: "2",
    date: "2024-2025",
    position: "Senior Frontend Engineer, Accessibility ·",
    project_name: "Daraz",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend...",
    language: {
      language_name: ["HTML", "Bootstrap", "React"],
    },
  },
];


const experienceSlice = createSlice({
  name: "experience",
  initialState: DEFAULT_EXP,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const experienceAction = experienceSlice.actions;
export default experienceSlice;
