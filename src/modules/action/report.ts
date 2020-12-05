import { createAction, ActionType } from 'typesafe-actions';

import { ServerError } from '../apiHandler';

const SET_TITLE = 'report/SET_TITLE'; // report_name 값 설정
const SET_CONTENT = 'report/SET_CONTENT'; // report 내용 설정
const SET_IMAGE = 'report/SET_IMAGE'; // image 값 설정
const SET_CATEGORY = 'report/SET_CATEGORY'; // 카테고리 값 설정
const SET_PROCESS = 'report/SET_PROCESS'; // 프로세스 설정

const CALL_REPORT_API = 'report/REPORT_API'; // API서버에 글작성 요청

const setTitle = createAction(SET_TITLE)<string>();
const setContent = createAction(SET_CONTENT)<string>();
const setImage = createAction(SET_IMAGE)<string>();
const setCategory = createAction(SET_CATEGORY)<string>();
const setProcess = createAction(SET_PROCESS)<string>();

const callReportApi = createAction(CALL_REPORT_API)();

export const reportType = {
    SET_TITLE,
    SET_CONTENT,
    SET_IMAGE,
    SET_CATEGORY,
    SET_PROCESS,
    CALL_REPORT_API,
};

export const reportAction = {
    setTitle,
    setContent,
    setImage,
    setCategory,
    setProcess,
    callReportApi,
};

export type SetTitle = ActionType<typeof setTitle>;
export type SetContent = ActionType<typeof setContent>;
export type SetImage = ActionType<typeof setImage>;
export type SetCategory = ActionType<typeof setCategory>;
export type SetProcess = ActionType<typeof setProcess>;
export type CallReportApi = ActionType<typeof callReportApi>;
export type ReportAction = ActionType<typeof reportAction>;
