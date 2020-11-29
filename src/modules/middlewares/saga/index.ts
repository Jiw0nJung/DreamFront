import { all, fork } from 'redux-saga/effects';

import loginSaga from './login';
// import userSaga from './user';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
}
