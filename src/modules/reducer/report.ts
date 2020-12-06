import { createReducer } from 'typesafe-actions';

import { ReportAction, reportAction } from '../action';

export interface ReportState {
    title: string;
    content: string;
    image1: string;
    image2: string;
    image3: string;
    category: string;
    process: string;
}

const initialState: ReportState = {
    title: '',
    content: '',
    image1: '',
    image2: '',
    image3: '',
    category: '',
    process: 'processing',
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
    .handleAction(reportAction.setImage1, (state, action) => ({
        ...state,
        image1: action.payload,
    }))
    .handleAction(reportAction.setImage2, (state, action) => ({
        ...state,
        image2: action.payload,
    }))
    .handleAction(reportAction.setImage3, (state, action) => ({
        ...state,
        image3: action.payload,
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
