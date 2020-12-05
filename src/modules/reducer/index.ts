import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app';
import reportReducer from './report';

const rootReducer = combineReducers({
    appReducer,
    userReducer,
    reportReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
