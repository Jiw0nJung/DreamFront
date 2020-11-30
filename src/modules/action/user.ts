import { createAction, ActionType } from 'typesafe-actions';

import { ServerError } from '../apiHandler';

const SET_USERNAME = 'user/SET_USERNAME'; // Username 값 설정
const SET_EMAIL = 'user/SET_EMAIL'; // Email 값 설정
const SET_PASSWORD = 'user/SET_PASSWORD'; // Password 값 설정
const SET_BIRTH = 'user/SET_BIRTH'; // Birth 값 설정
const SET_PHONE = 'user/SET_PHONE'; // Phone 값 설정
const SET_SCHOOL = 'user/SET_SCHOOL'; // school 값 설정
const SET_ADDRESS = 'user/SET_ADDRESS'; // Address 값 설정
const SET_TOKEN = 'login/SET_TOKEN'; // Token 값 설정

const CALL_LOGIN_API = 'login/LOGIN_API'; // API서버에서 Token 값을 가져와 설정
const CALL_LOGIN_API_FAILURE = 'login/SET_TOKEN_FROM_API_FAILURE'; // API서버에서 Token 값을 가져와 설정
const CALL_EMAILCHECK_API = 'join/EMAILCHECK_API'; // 중복되는 email이 있는지 API서버로 확인 요청
const CALL_USER_API = 'join/USER_API'; // API서버에 회원가입 요청

const setUserName = createAction(SET_USERNAME)<string>();
const setEmail = createAction(SET_EMAIL)<string>();
const setPassword = createAction(SET_PASSWORD)<string>();
const setBirth = createAction(SET_BIRTH)<string>();
const setPhone = createAction(SET_PHONE)<string>();
const setSchool = createAction(SET_SCHOOL)<string>();
const setAddress = createAction(SET_ADDRESS)<string>();
const setToken = createAction(SET_TOKEN)<string | null>();

const callLoginApi = createAction(CALL_LOGIN_API)();
const callLoginApiFailure = createAction(CALL_LOGIN_API_FAILURE)<ServerError>();
const callEmailCheckApi = createAction(CALL_EMAILCHECK_API)();
const callUserApi = createAction(CALL_USER_API)();

export const userType = {
    SET_USERNAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_BIRTH,
    SET_PHONE,
    SET_SCHOOL,
    SET_ADDRESS,
    SET_TOKEN,
    CALL_LOGIN_API,
    CALL_LOGIN_API_FAILURE,
    CALL_EMAILCHECK_API,
    CALL_USER_API,
};

export const userAction = {
    setUserName,
    setEmail,
    setPassword,
    setBirth,
    setPhone,
    setSchool,
    setAddress,
    setToken,
    callLoginApi,
    callLoginApiFailure,
    callEmailCheckApi,
    callUserApi,
};

export type SetUserName = ActionType<typeof setUserName>;
export type SetEmail = ActionType<typeof setEmail>;
export type SetPassword = ActionType<typeof setPassword>;
export type SetBirth = ActionType<typeof setBirth>;
export type SetPhone = ActionType<typeof setPhone>;
export type SetSChool = ActionType<typeof setSchool>;
export type SetAddress = ActionType<typeof setAddress>;
export type SetToken = ActionType<typeof setToken>;
export type CallLoginApi = ActionType<typeof callLoginApi>;
export type CallLoginApiFailure = ActionType<typeof callLoginApiFailure>;
export type CallEmailCheckApi = ActionType<typeof callEmailCheckApi>;
export type CallUserApi = ActionType<typeof callUserApi>;
export type UserAction = ActionType<typeof userAction>;
