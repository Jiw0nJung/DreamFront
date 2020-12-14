import React, { useMemo, useEffect, useCallback } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import path from '../constants/path';

import { useUserState, useAppState } from '../modules/hook';

export default function Login({ history }: RouteChildrenProps): JSX.Element {
    const {
        state: userState,
        setEmail,
        setPassword,
        callLoginApi,
        isLogined,
    } = useUserState();

    const { state: appState, showErrorMessage } = useAppState();

    /**
     * @description Login Token이 존재하면 로그인 상태로 간주합니다.
     */
    useEffect(() => {
        if (isLogined) history.replace(path.main);
    }, [isLogined, history]);

    /**
     * @description Login 과정에서 Error가 발생하면 Message를 보여줍니다.
     */
    useEffect(() => {
        if (appState.error.code) showErrorMessage();
    }, [appState.error.code, setEmail, setPassword, showErrorMessage]);

    /**
     * @description ID 값을 변경합니다.
     */
    const onChangeEmailValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value),
        [setEmail],
    );

    /**
     * @description Password 값을 변경합니다.
     */
    const onChangePasswordValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value),
        [setPassword],
    );

    /**
     * @description Enter키를 눌러도 로그인이 됩니다.
     */
    const loginEnterFunc = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') callLoginApi();
    };

    return (
        <div className="login-container">
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <div className="login-form-wrapper">
                <div className="login-form">
                    <p className="title">로그인</p>
                    <div className="login-input-wrapper">
                        <p>이메일</p>
                        <input
                            className="field email"
                            placeholder="이메일"
                            type="text"
                            onChange={onChangeEmailValue}
                            value={userState.email}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <p>비밀번호</p>
                        <input
                            className="field pw"
                            placeholder="패스워드"
                            type="password"
                            onChange={onChangePasswordValue}
                            value={userState.password}
                            onKeyPress={loginEnterFunc}
                        />
                    </div>
                    <div className="chk-keep-login">
                        <input type="checkbox" />
                        <span> 로그인 유지</span>
                    </div>
                    <button
                        className="btn-login"
                        type="button"
                        onClick={callLoginApi}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}
