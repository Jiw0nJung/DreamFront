import { createAction, ActionType } from 'typesafe-actions';

import { ServerError } from '../apiHandler';

const SET_LOADING = 'app/SET_LOADING'; // Loading 상태 설정
const RELEASE_LOADING = 'app/RELEASE_LOADING'; // Loading 상태 헤제

const SET_ERROR = 'app/SET_ERROR'; // Error 상태 설정
const RELEASE_ERROR = 'app/RELEASE_ERROR'; // Error 상태 헤제
const SET_SERVER_ERROR = 'app/SET_SERVER_ERROR'; // Api Handler에서 발생하는 Error를 핸들링합니다.

const setLoading = createAction(SET_LOADING)();
const releaseLoading = createAction(RELEASE_LOADING)();

const setError = createAction(SET_ERROR)<string>();
const releaseError = createAction(RELEASE_ERROR)();
const setServerError = createAction(SET_SERVER_ERROR)<ServerError>();

export const appType = {
    SET_LOADING,
    RELEASE_LOADING,
    SET_ERROR,
    RELEASE_ERROR,
    SET_SERVER_ERROR,
};

export const appAction = {
    setLoading,
    releaseLoading,
    setError,
    releaseError,
    setServerError,
};

export type SetLoading = ActionType<typeof setLoading>;
export type SetError = ActionType<typeof setError>;
export type AppAction = ActionType<typeof appAction>;
