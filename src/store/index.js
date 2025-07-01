import { configureStore } from "@reduxjs/toolkit";
import experienceSlice from "./experienceSlice";
import projectSlice from "./projectSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import writingSlice from "./writingSlice";

const myStore = configureStore({
  reducer: {
    experience: experienceSlice.reducer,
    project: projectSlice.reducer,
    writing: writingSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});
export default myStore;
