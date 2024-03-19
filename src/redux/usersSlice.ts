import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../types/User";

interface UserState extends User {}

const initialState: UserState[] = [];

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
