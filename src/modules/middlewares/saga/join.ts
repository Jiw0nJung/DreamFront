/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
    joinHandler,
    emailCheckHandler,
    parseServerError,
} from '../../apiHandler';
import { RootState } from '../../reducer';
import { appAction, userAction, userType } from '../../action';

/**
 * @description CALL_EMAILCHECK_API
 */
function* callEmailCheckApi$() {
    const data = yield select((state: RootState) => state.userReducer);

    if (data && data.email) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const duplicate = yield call(emailCheckHandler, data.email);

            yield put(userAction.setEmailCheck(duplicate));
            if (duplicate) {
                alert('이미 사용중인 이메일 입니다');
                yield put(userAction.setEmail(''));
            }

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}
/**
 * @description CALL_LOGIN_API 타입에 대한 Worker로서 API Server에서 로그인 토큰을 발급 받습니다.
 */
function* callJoinApi$() {
    const data = yield select((state: RootState) => state.userReducer);

    if (
        data &&
        data.name &&
        data.school &&
        data.birth &&
        data.phone &&
        data.email &&
        data.password &&
        data.address &&
        data.detailAddress
    ) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            yield call(
                joinHandler,
                data.name,
                data.school,
                data.birth,
                data.phone,
                data.email,
                data.password,
                data.address,
                data.detailAddress,
            );

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}

/**
 * @description login 비동기 액션에 대한 Saga Watcher
 */
export default function* joinSaga() {
    yield all([takeEvery(userType.CALL_EMAILCHECK_API, callEmailCheckApi$)]);
    yield all([takeEvery(userType.CALL_USER_API, callJoinApi$)]);
}
