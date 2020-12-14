import { createAction, ActionType } from 'typesafe-actions';

const SET_TITLE = 'report/SET_TITLE'; // report_name 값 설정
const SET_CONTENT = 'report/SET_CONTENT'; // report 내용 설정
const SET_IMAGE1 = 'report/SET_IMAGE1'; // image1 값 설정
const SET_IMAGE2 = 'report/SET_IMAGE2'; // image2 값 설정
const SET_IMAGE3 = 'report/SET_IMAGE3'; // image3 값 설정
const SET_CATEGORY = 'report/SET_CATEGORY'; // 카테고리 값 설정
const SET_ACCEPT_TERM = 'report/SET_ACCEPT_TERM'; // 약관동의
const SET_EMPATHY = 'report/SET_EMPATHY'; // 공감설정
const SET_SUPPORT = 'report/SET_SUPPORT'; // 지원설정
const SET_INDEX = 'report/SET_INDEX'; // 인덱스설정
const SET_OWNER = 'report/SET_OWNER'; // 오너설정
const SET_DATE = 'report/SET_DATE'; // 오너설정
const SET_STATUS = 'report/SET_STATUS'; // 오너설정
const SET_LIST = 'report/SET_LIST'; // 리스트설정

const CALL_WRITE_REPORT_API = 'report/WRITE_REPORT_API'; // API서버에 글작성 요청
const CALL_VIEW_REPORT_API = 'report/VIEW_REPORT_API'; // API서버에 작성된 글 확인 요청
const CALL_REPORT_LIST_API = 'report/REPORT_LIST_API'; // API서버에 글작성 요청
const CALL_EMPATHY_API = 'report/EMPATHY_API'; // API서버에 공감 추가 요청
const CALL_SUPPORT_API = 'report/SUPPORT_API'; // API서버에 지원 추가 요청

const setTitle = createAction(SET_TITLE)<string>();
const setContent = createAction(SET_CONTENT)<string>();
const setImage1 = createAction(SET_IMAGE1)<string>();
const setImage2 = createAction(SET_IMAGE2)<string>();
const setImage3 = createAction(SET_IMAGE3)<string>();
const setCategory = createAction(SET_CATEGORY)<string>();
const setAcceptTerm = createAction(SET_ACCEPT_TERM)<boolean>();
const setEmpathy = createAction(SET_EMPATHY)<number>();
const setSupport = createAction(SET_SUPPORT)<number>();
const setIndex = createAction(SET_INDEX)<string>();
const setOwner = createAction(SET_OWNER)<string>();
const setDate = createAction(SET_DATE)<Date>();
const setStatus = createAction(SET_STATUS)<string>();
const setList = createAction(SET_LIST)<Array<any>>();

const callWriteReportApi = createAction(CALL_WRITE_REPORT_API)();
const callViewReportApi = createAction(CALL_VIEW_REPORT_API)();
const callReportListApi = createAction(CALL_REPORT_LIST_API)();
const callEmpathyApi = createAction(CALL_EMPATHY_API)();
const callSupportApi = createAction(CALL_SUPPORT_API)();

export const reportType = {
    SET_TITLE,
    SET_CONTENT,
    SET_IMAGE1,
    SET_IMAGE2,
    SET_IMAGE3,
    SET_CATEGORY,
    SET_ACCEPT_TERM,
    SET_EMPATHY,
    SET_SUPPORT,
    SET_INDEX,
    SET_OWNER,
    SET_DATE,
    SET_STATUS,
    SET_LIST,
    CALL_WRITE_REPORT_API,
    CALL_VIEW_REPORT_API,
    CALL_REPORT_LIST_API,
    CALL_EMPATHY_API,
    CALL_SUPPORT_API,
};

export const reportAction = {
    setTitle,
    setContent,
    setImage1,
    setImage2,
    setImage3,
    setCategory,
    setAcceptTerm,
    setEmpathy,
    setSupport,
    setIndex,
    setOwner,
    setDate,
    setStatus,
    setList,
    callWriteReportApi,
    callViewReportApi,
    callReportListApi,
    callEmpathyApi,
    callSupportApi,
};

export type SetTitle = ActionType<typeof setTitle>;
export type SetContent = ActionType<typeof setContent>;
export type SetImage1 = ActionType<typeof setImage1>;
export type SetImage2 = ActionType<typeof setImage2>;
export type SetImage3 = ActionType<typeof setImage3>;
export type SetCategory = ActionType<typeof setCategory>;
export type SetAcceptTerm = ActionType<typeof setAcceptTerm>;
export type SetEmpathy = ActionType<typeof setEmpathy>;
export type SetSupport = ActionType<typeof setSupport>;
export type SetIndex = ActionType<typeof setIndex>;
export type SetOwner = ActionType<typeof setOwner>;
export type SetDate = ActionType<typeof setDate>;
export type SetStatus = ActionType<typeof setStatus>;
export type SetList = ActionType<typeof setList>;
export type CallWriteReportApi = ActionType<typeof callWriteReportApi>;
export type CallViewReportApi = ActionType<typeof callViewReportApi>;
export type CallReportListApi = ActionType<typeof callReportListApi>;
export type CallEmpathyApi = ActionType<typeof callEmpathyApi>;
export type CallSupportApi = ActionType<typeof callSupportApi>;
export type ReportAction = ActionType<typeof reportAction>;
