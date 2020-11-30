/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, fork } from 'redux-saga/effects';

import loginSaga from './user';
// import userSaga from './user';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
}
