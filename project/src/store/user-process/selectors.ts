import { AuthStatus, NameSpace } from 'src/const';
import { TState } from 'src/types/state';

export const getAuthorizationStatus = (state: TState): AuthStatus =>
  state[NameSpace.User].authorizationStatus;
