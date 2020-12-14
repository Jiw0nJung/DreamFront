/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, fork } from 'redux-saga/effects';

import loginSaga from './login';
import joinSaga from './join';
import reportSaga from './report';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
    yield all([fork(joinSaga)]);
    yield all([fork(reportSaga)]);
}
