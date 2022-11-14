import { store } from 'src/store';

export type TState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
