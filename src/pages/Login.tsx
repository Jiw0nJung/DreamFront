import { check } from 'prettier';
import React, { useMemo, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

import { useUserState, useAppState } from '../modules/hook';

export default function Login(): JSX.Element {
    const {
        state: userState,
        setEmail,
        setPassword,
        callLoginApi,
    } = useUserState();

    const { state: appState, showErrorMessage } = useAppState();

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
     * @description ID와 Password 값이 입력되면 버튼을 홯성화합니다.
     */
    const activateButton = useMemo(() => {
        return Boolean(userState.email && userState.password);
    }, [userState.email, userState.password]);

    /**
     * @description Enter키를 눌러도 로그인이 됩니다.
     */
    const loginEnterFunc = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') callLoginApi();
    };

    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <div className="login-container">
                <div className="login-box1">
                    <div className="login-logo1">
                        <img
                            alt="dream-logo-white"
                            srcSet="/image/dream-logo.png"
                            height="230px"
                        />
                    </div>
                    <div className="login-box2">
                        <div className="login-box2-login-img">
                            <div className="img1">로그인</div>
                        </div>
                        <div className="login-box2-login-form">
                            <p>이메일</p>
                            <input
                                className="field email"
                                placeholder="이메일"
                                type="text"
                                onChange={onChangeEmailValue}
                                value={userState.email}
                            />
                            <p>비밀번호</p>
                            <input
                                className="field pw"
                                placeholder="패스워드"
                                type="password"
                                onChange={onChangePasswordValue}
                                value={userState.password}
                                onKeyPress={loginEnterFunc}
                            />
                            <div className="chk_keep_login">
                                <input type="checkbox" />
                                <span> 로그인 유지</span>
                            </div>
                            <button
                                className="btn_login"
                                type="button"
                                onClick={callLoginApi}
                                disabled={!activateButton}
                            >
                                로그인
                            </button>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
