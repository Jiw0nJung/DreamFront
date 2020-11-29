import { createReducer } from 'typesafe-actions';

import { LoginAction, loginAction } from '../action';

export interface LoginState {
    id: string;
    password: string;
    token: null | string;
}

const initialState: LoginState = {
    id: '',
    password: '',
    token: null,
};

export default createReducer<LoginState, LoginAction>(initialState)
    // ID 값 설정
    .handleAction(loginAction.setId, (state, action) => ({
        ...state,
        id: action.payload,
    }))
    // Password 값 설정
    .handleAction(loginAction.setPassword, (state, action) => ({
        ...state,
        password: action.payload,
    }))
    // Token 값 설정
    .handleAction(loginAction.setToken, (_, action) => ({
        id: '',
        password: '',
        token: action.payload,
    }));
