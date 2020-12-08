import { createAction, ActionType } from 'typesafe-actions';

import { ServerError } from '../apiHandler';

const SET_TITLE = 'report/SET_TITLE'; // report_name 값 설정
const SET_CONTENT = 'report/SET_CONTENT'; // report 내용 설정
const SET_IMAGE1 = 'report/SET_IMAGE1'; // image1 값 설정
const SET_IMAGE2 = 'report/SET_IMAGE2'; // image2 값 설정
const SET_IMAGE3 = 'report/SET_IMAGE3'; // image3 값 설정
const SET_CATEGORY = 'report/SET_CATEGORY'; // 카테고리 값 설정
const SET_PROCESS = 'report/SET_PROCESS'; // 프로세스 설정
const SET_ACCEPT_TERM = 'report/SET_ACCEPT_TERM'; //  설정

const CALL_REPORT_API = 'report/REPORT_API'; // API서버에 글작성 요청

const setTitle = createAction(SET_TITLE)<string>();
const setContent = createAction(SET_CONTENT)<string>();
const setImage1 = createAction(SET_IMAGE1)<string>();
const setImage2 = createAction(SET_IMAGE2)<string>();
const setImage3 = createAction(SET_IMAGE3)<string>();
const setCategory = createAction(SET_CATEGORY)<string>();
const setProcess = createAction(SET_PROCESS)<string>();
const setAcceptTerm = createAction(SET_ACCEPT_TERM)<boolean>();

const callReportApi = createAction(CALL_REPORT_API)();

export const reportType = {
    SET_TITLE,
    SET_CONTENT,
    SET_IMAGE1,
    SET_IMAGE2,
    SET_IMAGE3,
    SET_CATEGORY,
    SET_PROCESS,
    SET_ACCEPT_TERM,
    CALL_REPORT_API,
};

export const reportAction = {
    setTitle,
    setContent,
    setImage1,
    setImage2,
    setImage3,
    setCategory,
    setProcess,
    setAcceptTerm,
    callReportApi,
};

export type SetTitle = ActionType<typeof setTitle>;
export type SetContent = ActionType<typeof setContent>;
export type SetImage1 = ActionType<typeof setImage1>;
export type SetImage2 = ActionType<typeof setImage2>;
export type SetImage3 = ActionType<typeof setImage3>;
export type SetCategory = ActionType<typeof setCategory>;
export type SetProcess = ActionType<typeof setProcess>;
export type setAcceptTerm = ActionType<typeof setAcceptTerm>;
export type CallReportApi = ActionType<typeof callReportApi>;
export type ReportAction = ActionType<typeof reportAction>;
