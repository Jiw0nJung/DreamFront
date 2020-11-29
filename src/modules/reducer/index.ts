import { combineReducers } from 'redux';

import loginReducer from './login';
import appReducer from './app';

const rootReducer = combineReducers({
    appReducer,
    loginReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
