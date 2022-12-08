import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from 'src/const';
import { UserData } from 'src/types/user-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type TInitialState = {
  authorizationStatus: AuthStatus;
  userData: UserData | null;
};
const initialState: TInitialState = {
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkAuthAction.fulfilled, (state) => {
      state.authorizationStatus = AuthStatus.Auth;
    });
    builder.addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthStatus.Auth;
      state.userData = action.payload;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    });

    builder.addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    });
  },
});
