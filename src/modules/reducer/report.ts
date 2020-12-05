import { createReducer } from 'typesafe-actions';

import { ReportAction, reportAction } from '../action';

export interface ReportState {
    title: string;
    content: string;
    image: string;
    category: string;
    process: string;
}

const initialState: ReportState = {
    title: '',
    content: '',
    image: '',
    category: '',
    process: 'inProcessing',
};

export default createReducer<ReportState, ReportAction>(initialState)
    // Title 설정
    .handleAction(reportAction.setTitle, (state, action) => ({
        ...state,
        title: action.payload,
    }))
    // Content 설정
    .handleAction(reportAction.setContent, (state, action) => ({
        ...state,
        content: action.payload,
    }))
    // 첨부파일 값 설정
    .handleAction(reportAction.setImage, (state, action) => ({
        ...state,
        image: action.payload,
    }))
    // Category 설정
    .handleAction(reportAction.setCategory, (state, action) => ({
        ...state,
        category: action.payload,
    }))
    // process 값 설정
    .handleAction(reportAction.setProcess, (state, action) => ({
        ...state,
        process: action.payload,
    }));
