import { store } from 'src/store';
import { setError } from 'src/store/action';
import { clearError } from 'src/store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};
