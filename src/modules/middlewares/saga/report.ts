/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
    reportWriteHandler,
    reportSupportHandler,
    reportEmpathyHandler,
    reportViewHandler,
    reportListHandler,
    parseServerError,
} from '../../apiHandler';
import { RootState } from '../../reducer';
import { appAction, reportAction, reportType } from '../../action';
import PATH from '../../../constants/path';

/**
 * @description CALL_WRITE_REPORT_API
 */
function* callWriteReportApi$() {
    const data = yield select((state: RootState) => state.reportReducer);

    if (
        (data.title,
        data.category,
        data.content,
        data.owner,
        data.image1,
        data.image2,
        data.image3)
    ) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const index = yield call(
                reportWriteHandler,
                data.title,
                data.category,
                data.content,
                data.owner,
                data.image1,
                data.image2,
                data.image3,
            );

            window.location.replace(PATH.reportdetail + index);

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}

/**
 * @description CALL_VIEW_REPORT_API
 */
function* callViewReportApi$() {
    const sendData = yield select((state: RootState) => state.reportReducer);

    if (sendData.index) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const data = yield call(reportViewHandler, sendData.index);

            yield put(reportAction.setIndex(data.index));
            yield put(reportAction.setTitle(data.title));
            yield put(reportAction.setCategory(data.category));
            yield put(reportAction.setContent(data.content));
            yield put(reportAction.setOwner(data.owner));
            yield put(reportAction.setDate(data.date));
            yield put(reportAction.setStatus(data.status));
            yield put(reportAction.setImage1(data.image1));
            yield put(reportAction.setImage2(data.image2));
            yield put(reportAction.setImage3(data.image3));
            yield put(reportAction.setEmpathy(data.empathy));
            yield put(reportAction.setSupport(data.support));
            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}

/**
 * @description CALL_REPORT_LIST_API
 */
function* callReportListApi$() {
    const sendData = yield select((state: RootState) => state.reportReducer);

    if (sendData) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const data = yield call(reportListHandler, sendData);

            yield put(reportAction.setList(data.reports));

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}

/**
 * @description CALL_EMPATHY_API
 */
function* callEmpathyApi$() {
    const sendData = yield select((state: RootState) => state.reportReducer);

    if (sendData.index) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const data = yield call(reportEmpathyHandler, sendData.index);

            yield put(reportAction.setEmpathy(data.empathy));

            yield put(appAction.releaseLoading()); // Loading 상태를 헤제합니다.
        } catch (error) {
            const serverError = parseServerError(error);
            yield put(appAction.setServerError(serverError));
        }
    }
}

/**
 * @description CALL_SUPPORT_API
 */
function* callSupportApi$() {
    const sendData = yield select((state: RootState) => state.reportReducer);

    if (sendData.index) {
        try {
            yield put(appAction.setLoading()); // App을 Loading 상태로 만듭니다.

            const data = yield call(reportEmpathyHandler, sendData.index);

            yield put(reportAction.setSupport(data.support));

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
    yield all([
        takeEvery(reportType.CALL_WRITE_REPORT_API, callWriteReportApi$),
        takeEvery(reportType.CALL_VIEW_REPORT_API, callViewReportApi$),
        takeEvery(reportType.CALL_REPORT_LIST_API, callReportListApi$),
        takeEvery(reportType.CALL_EMPATHY_API, callEmpathyApi$),
        takeEvery(reportType.CALL_SUPPORT_API, callSupportApi$),
    ]);
}
