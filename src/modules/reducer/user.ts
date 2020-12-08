import { createReducer } from 'typesafe-actions';

import { UserAction, userAction } from '../action';

export interface UserState {
    name: string;
    email: string;
    password: string;
    passwordChk: string;
    birth: string;
    phone: string;
    school: string;
    address: string;
    detailAddress: string;
    token: null | string;
}

const initialState: UserState = {
    name: '',
    email: '',
    password: '',
    passwordChk: '',
    birth: '',
    phone: '',
    school: '',
    address: '',
    detailAddress: '',
    token: null,
};

export default createReducer<UserState, UserAction>(initialState)
    // UserName 값 설정
    .handleAction(userAction.setUserName, (state, action) => ({
        ...state,
        name: action.payload,
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
    // Password 값 설정
    .handleAction(userAction.setPasswordCheck, (state, action) => ({
        ...state,
        passwordChk: action.payload,
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
    // DetailAddress 값 설정
    .handleAction(userAction.setDetailAddress, (state, action) => ({
        ...state,
        detailAddress: action.payload,
    }))
    // Token 값 설정
    .handleAction(userAction.setToken, (_, action) => ({
        name: '',
        email: '',
        password: '',
        passwordChk: '',
        birth: '',
        phone: '',
        school: '',
        address: '',
        detailAddress: '',
        token: action.payload,
    }));
