import { createReducer } from 'typesafe-actions';

import { AppAction, appAction } from '../action';

export interface AppError {
    code: number;
    message: string;
}

export interface AppState {
    loading: boolean;
    error: AppError;
}

const initialState: AppState = {
    loading: false,
    error: { code: 0, message: '' },
};

export default createReducer<AppState, AppAction>(initialState)
    // Loading 상태 설정
    .handleAction(appAction.setLoading, () => ({
        loading: true,
        error: initialState.error,
    }))
    // Loading 상태 헤제
    .handleAction(appAction.releaseLoading, state => ({
        ...state,
        loading: false,
    }))
    // Error 상태 설정
    .handleAction(appAction.setError, (_, action) => ({
        loading: false,
        error: { code: 500, message: action.payload },
    }))
    // Error 상태 헤제
    .handleAction(appAction.releaseError, state => ({
        ...state,
        error: initialState.error,
    }))
    // Api Handler에서 발생하는 Error를 핸들링합니다.
    .handleAction(appAction.setServerError, (_, action) => ({
        loading: false,
        error: { code: action.payload.code, message: action.payload.message },
    }));
