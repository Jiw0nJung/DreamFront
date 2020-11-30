import { createReducer } from 'typesafe-actions';

import { UserAction, userAction } from '../action';

export interface UserState {
    user_name: string;
    email: string;
    password: string;
    birth: string;
    phone: string;
    school: string;
    address: string;
    token: null | string;
}

const initialState: UserState = {
    user_name: '',
    email: '',
    password: '',
    birth: '',
    phone: '',
    school: '',
    address: '',
    token: null,
};

export default createReducer<UserState, UserAction>(initialState)
    // UserName 값 설정
    .handleAction(userAction.setUserName, (state, action) => ({
        ...state,
        user_name: action.payload,
    }))
    // Email 값 설정
    .handleAction(userAction.setEmail, (state, action) => ({
        ...state,
        email: action.payload,
    }))
    // Password 값 설정
    .handleAction(userAction.setPassword, (state, action) => ({
        ...state,
        password: action.payload,
    }))
    // Birth 값 설정
    .handleAction(userAction.setBirth, (state, action) => ({
        ...state,
        birth: action.payload,
    }))
    // Phone 값 설정
    .handleAction(userAction.setPhone, (state, action) => ({
        ...state,
        phone: action.payload,
    }))
    // School 값 설정
    .handleAction(userAction.setSchool, (state, action) => ({
        ...state,
        school: action.payload,
    }))
    // Address 값 설정
    .handleAction(userAction.setAddress, (state, action) => ({
        ...state,
        address: action.payload,
    }))
    // Token 값 설정
    .handleAction(userAction.setToken, (_, action) => ({
        user_name: '',
        email: '',
        password: '',
        birth: '',
        phone: '',
        school: '',
        address: '',
        token: action.payload,
    }));
