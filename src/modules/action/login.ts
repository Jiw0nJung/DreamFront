import { createAction, ActionType } from 'typesafe-actions';

import { ServerError } from '../apiHandler';

const SET_ID = 'login/SET_ID'; // ID 값 설정
const SET_PASSWORD = 'login/SET_PASSWORD'; // Password 값 설정
const SET_TOKEN = 'login/SET_TOKEN'; // Token 값 설정

const CALL_LOGIN_API = 'login/LOGIN_API'; // API서버에서 Token 값을 가져와 설정
const CALL_LOGIN_API_FAILURE = 'login/STE_TOKEN_FROM_API_FAILURE'; // API서버에서 Token 값을 가져와 설정

const setId = createAction(SET_ID)<string>();
const setPassword = createAction(SET_PASSWORD)<string>();
const setToken = createAction(SET_TOKEN)<string | null>();

const callLoginApi = createAction(CALL_LOGIN_API)();
const callLoginApiFailure = createAction(CALL_LOGIN_API_FAILURE)<ServerError>();

export const loginType = {
    SET_ID,
    SET_PASSWORD,
    SET_TOKEN,
    CALL_LOGIN_API,
    CALL_LOGIN_API_FAILURE,
};

export const loginAction = {
    setId,
    setPassword,
    setToken,
    callLoginApi,
    callLoginApiFailure,
};

export type SetId = ActionType<typeof setId>;
export type SetPassword = ActionType<typeof setPassword>;
export type SetToken = ActionType<typeof setToken>;
export type CallLoginApi = ActionType<typeof callLoginApi>;
export type CallLoginApiFailure = ActionType<typeof callLoginApiFailure>;
export type LoginAction = ActionType<typeof loginAction>;
