import { createAction } from '@reduxjs/toolkit';

const REDIRECT_TO_ROUTE = 'app/redirectToRoute';
const redirectToRoute = createAction<string>(REDIRECT_TO_ROUTE);

export { redirectToRoute, REDIRECT_TO_ROUTE };
