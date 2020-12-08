import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useUserState, useAppState } from '../modules/hook';

import { exp } from '../constants/text';
import PATH from '../constants/path';

declare global {
    interface Window {
        daum: any;
    }
}

export default function Join(): JSX.Element {
    const {
        state: userState,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck,
        setBirth,
        setPhone,
        setSchool,
        setAddress,
        setDetailAddress,
        callUserApi,
        callEmailCheckApi,
    } = useUserState();

    const { state: appState, showErrorMessage } = useAppState();

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src =
            'http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false';
        document.head.appendChild(script);
    }, []);

    /**
     * @description Join 과정에서 Error가 발생하면 Message를 보여줍니다.
     */
    useEffect(() => {
        if (appState.error.code) showErrorMessage();
    }, [appState.error.code, setEmail, setPassword, showErrorMessage]);

    /**
     * @description Username 값을 변경합니다.
     */
    const onChangeUsernameValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
        },
        [setUsername],
    );

    /**
     * @description Email 값을 변경합니다.
     */
    const onChangeEmailValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
        },
        [setEmail],
    );

    /**
     * @description Birth 값을 변경합니다.
     */
    const onChangeBirthValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setBirth(event.target.value),
        [setBirth],
    );

    /**
     * @description Phone 값을 변경합니다.
     */
    const onChangePhoneValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(event.target.value),
        [setPhone],
    );

    /**
     * @description School 값을 변경합니다.
     */
    const onChangeSchoolValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setSchool(event.target.value),
        [setSchool],
    );

    /**
     * @description Address 값을 변경합니다.
     */
    const onChangeDetailAddressValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setDetailAddress(event.target.value),
        [setDetailAddress],
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
     * @description Password 값을 중복확인합니다.
     */
    const onChangePwChkValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordCheck(event.target.value),
        [setPasswordCheck],
    );

    const showPostcode = () => {
        window.daum.postcode.load(() => {
            new window.daum.Postcode({
                oncomplete: (data: {
                    address: string;
                    addressType: string;
                    bname: string;
                    buildingName: string;
                }) => {
                    let fullAddress = data.address;
                    let extraAddress = '';

                    if (data.addressType === 'R') {
                        if (data.bname !== '') {
                            extraAddress += data.bname;
                        }
                        if (data.buildingName !== '') {
                            extraAddress +=
                                extraAddress !== ''
                                    ? `, ${data.buildingName}`
                                    : data.buildingName;
                        }
                        fullAddress +=
                            extraAddress !== '' ? ` (${extraAddress})` : '';
                    }

                    setAddress(fullAddress);
                },
            }).open();
        });
    };

    /**
     * @description ID와 Password 값이 입력되면 버튼을 홯성화합니다.
     */
    const activateButton = useMemo(() => {
        return Boolean(
            userState.email &&
                userState.password &&
                userState.name &&
                userState.school &&
                userState.birth &&
                userState.phone &&
                userState.address,
        );
    }, [
        userState.email,
        userState.password,
        userState.name,
        userState.school,
        userState.birth,
        userState.phone,
        userState.address,
    ]);

    /**
     * @description ID와 Password 값이 입력되면 버튼을 홯성화합니다.
     */
    const checkExp = useCallback(() => {
        const chkEmail = exp.email.test(userState.email);
        const chkName = exp.name.test(userState.name);
        const chkPw = exp.password.test(userState.password);
        const phone = exp.phone.test(userState.phone);
        const pwDblChk = Boolean(userState.password === userState.passwordChk);

        Boolean(chkEmail && chkName && chkPw && phone && pwDblChk)
            ? callUserApi
            : null;
    }, [
        userState.email,
        userState.password,
        userState.name,
        userState.phone,
        userState.address,
    ]);
    const redirectMain = useCallback(() => {
        document.location.href = PATH.main;
    }, [history]);
    /**
     * @description Enter키를 눌러도 로그인이 됩니다.
     */
    const joinEnterFunc = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') callUserApi();
    };
    return (
        <>
            <div className="header-container">
                <img
                    alt="dream-logo-white"
                    srcSet="/image/dream-logo-white.png"
                    height="70px"
                    onClick={redirectMain}
                />
            </div>
            <Helmet>
                <title>회원가입</title>
            </Helmet>
            <div className="join-container">
                <div className="join-box">
                    <div className="join-title">회원가입</div>
                    <div className="join-inbox">
                        <div className="join-inbox-1">
                            <p>이름</p>
                            <input
                                className="field name"
                                placeholder="이름"
                                type="text"
                                onChange={onChangeUsernameValue}
                                value={userState.name}
                            />
                        </div>
                        <div className="join-inbox-2-1">
                            <p>학교</p>
                            <input
                                className="field school"
                                placeholder="학교"
                                type="text"
                                onChange={onChangeSchoolValue}
                                value={userState.school}
                            />
                        </div>
                        <div className="join-inbox-2-2">
                            <p>생년월일</p>
                            <input
                                className="field birth"
                                placeholder="생년월일"
                                type="date"
                                onChange={onChangeBirthValue}
                                value={userState.birth}
                            />
                        </div>
                        <div className="join-inbox-1">
                            <p>휴대폰번호</p>
                            <div className="mergeInput">
                                <input
                                    className="field phone"
                                    placeholder="휴대전화"
                                    type="text"
                                    onChange={onChangePhoneValue}
                                    value={userState.phone}
                                />
                            </div>
                        </div>
                        <div className="join-inbox-1">
                            <p>이메일</p>
                            <div className="mergeInput">
                                <input
                                    className="field email"
                                    placeholder="이메일"
                                    type="text"
                                    onChange={onChangeEmailValue}
                                    value={userState.email}
                                />
                                <button
                                    className="button"
                                    type="button"
                                    onClick={callEmailCheckApi}
                                >
                                    이메일 확인
                                </button>
                            </div>
                        </div>
                        <div className="join-inbox-2-1">
                            <p>비밀번호</p>
                            <input
                                className="field password"
                                placeholder="비밀번호"
                                type="password"
                                onChange={onChangePasswordValue}
                                value={userState.password}
                            />
                        </div>
                        <div className="join-inbox-2-2">
                            <p>비밀번호확인</p>
                            <input
                                className="field pwcheck"
                                placeholder="비밀번호 확인"
                                type="password"
                                onChange={onChangePwChkValue}
                                value={userState.passwordChk}
                            />
                        </div>
                        <div className="join-inbox-1">
                            <p>주소</p>
                            <div className="mergeInput">
                                <input
                                    className="field address"
                                    placeholder="주소"
                                    type="text"
                                    disabled={true}
                                    value={userState.address}
                                />
                                <button
                                    className="button"
                                    type="button"
                                    onClick={showPostcode}
                                >
                                    주소 입력
                                </button>
                            </div>
                            <input
                                className="field address"
                                placeholder="상세 주소"
                                type="text"
                                onChange={onChangeDetailAddressValue}
                                value={userState.detailAddress}
                                onKeyPress={joinEnterFunc}
                            />
                        </div>
                        <div className="join-inbox-3">
                            <button
                                className="button"
                                type="button"
                                onClick={checkExp}
                                disabled={!activateButton}
                            >
                                가입하기
                            </button>
                            <button className="button" type="button">
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                COPYRIGHT (C) Team Dream Hi All Rights Reserved.
            </div>
        </>
    );
}
