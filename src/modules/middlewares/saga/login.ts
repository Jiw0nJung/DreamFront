import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import { saveLoginToken } from '../../utils/session';
import { loginHandler, parseServerError } from '../../apiHandler';
import { RootState } from '../../reducer';
import {
    appAction,
    userAction,
    userType,
    CallLoginApiFailure,
} from '../../action';

/**
 * @description CALL_LOGIN_API 타입에 대한 Worker로서 API Server에서 로그인 토큰을 발급 받습니다.
 */
function* callLoginApi$() {
    const data = yield select((state: RootState) => state.userReducer);

    if (data && data.email && data.password) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const { token } = yield call(
                loginHandler,
                data.email,
                data.password,
            );

            saveLoginToken(token); // Session Storage에 Login Token을 저장합니다.
            yield put(userAction.setToken(token));

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(userAction.callLoginApiFailure(serverError));
        }
    }
}

/**
 * @description CALL_LOGIN_API_FAILURE 타입에 대한 Worker로서 API Server 호출 실패를 처리합니다.
 */
function* callLoginFailure$(action: CallLoginApiFailure) {
    const { payload: error } = action;

    yield put(userAction.setEmail(''));
    yield put(userAction.setPassword(''));
    yield put(appAction.setServerError(error));
}

/**
 * @description login 비동기 액션에 대한 Saga Watcher
 */
export default function* loginSaga() {
    yield all([
        takeEvery(userType.CALL_LOGIN_API, callLoginApi$),
        takeEvery(userType.CALL_LOGIN_API_FAILURE, callLoginFailure$),
    ]);
}
