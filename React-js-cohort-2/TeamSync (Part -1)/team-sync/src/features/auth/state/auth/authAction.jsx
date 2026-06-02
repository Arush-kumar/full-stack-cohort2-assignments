import { createAsyncThunk } from "@reduxjs/toolkit";

export let loginEmployee = createAsyncThunk('auth/login',
  async (credentials, thunkApi) => {
    try {
      let res = await fetch('/auth/login', credentials)
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)