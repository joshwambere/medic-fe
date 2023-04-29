import { createSlice } from '@reduxjs/toolkit';
import { user } from '../../types/auth.slice.types';

type AuthState = {
 user: user | undefined;
 token: string | undefined;
 loading: boolean;
 error: boolean;
 success: boolean;
};

const slice = createSlice({
 name: 'auth',
 initialState: {
  token: '',
  user: undefined
 } as AuthState,
 reducers: {
  setCredentials: (state, { payload: { token } }) => {
   state.token = token;
   localStorage.setItem('_galileo_tkn', token);
  },

  removeCredentials: state => {
   state.token = undefined;
   localStorage.removeItem('_galileo_tkn');
  }
 }
});

export const { setCredentials, removeCredentials,  } = slice.actions;
export default slice.reducer;
