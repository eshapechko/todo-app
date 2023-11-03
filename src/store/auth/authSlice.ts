import {createSlice} from '@reduxjs/toolkit';

export interface MyAuth {
  name: string;
}

const initialState: MyAuth = {
  name: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authIn(state, action) {
      state.name = action.payload;
    },
  },
});

export const {authIn} = authSlice.actions;

export default authSlice.reducer;
