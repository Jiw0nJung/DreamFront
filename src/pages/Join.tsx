import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useUserState, useAppState } from '../modules/hook';

import DaumPostcode from 'react-daum-postcode';

export default function Join(): JSX.Element {
    const {
        state: userState,
        setUsername,
        setEmail,
        setPassword,
        setBirth,
        setPhone,
        setSchool,
        setAddress,
        callUserApi,
        callEmailCheckApi,
    } = useUserState();

    const { state: appState, showErrorMessage } = useAppState();

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
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value),
        [setUsername],
    );

    /**
     * @description Email 값을 변경합니다.
     */
    const onChangeEmailValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value),
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

    const handleComplete = (data: {
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
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    /**
     * @description Address 값을 변경합니다.
     */
    const onChangeAddressValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setAddress(event.target.value),
        [setAddress],
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
            setPassword(event.target.value),
        [setPassword],
    );

    /**
     * @description ID와 Password 값이 입력되면 버튼을 홯성화합니다.
     */
    const activateButton = useMemo(() => {
        return Boolean(
            userState.email &&
                userState.password &&
                userState.user_name &&
                userState.school &&
                userState.birth &&
                userState.phone &&
                userState.address,
        );
    }, [
        userState.email,
        userState.password,
        userState.user_name,
        userState.school,
        userState.birth,
        userState.phone,
        userState.address,
    ]);

    /**
     * @description Enter키를 눌러도 로그인이 됩니다.
     */
    const joinEnterFunc = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') callUserApi();
    };
    return (
        <>
            <Helmet>
                <title>회원가입</title>
            </Helmet>
            <div className="join-container">
                <div className="join-box">
                    <div className="join-inbox">
                        <div className="join-inbox-1">
                            <p>이름</p>
                            <input
                                className="field name"
                                placeholder="이름"
                                type="text"
                                onChange={onChangeUsernameValue}
                                value={userState.user_name}
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
                                type="text"
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
                                <button
                                    className="button"
                                    type="button"
                                    onClick={callEmailCheckApi}
                                >
                                    본인 인증
                                </button>
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
                                value={userState.password}
                            />
                        </div>
                        <div className="join-inbox-1">
                            <p>주소</p>
                            <div className="mergeInput">
                                <input
                                    className="field address"
                                    placeholder="주소"
                                    type="text"
                                    onChange={onChangeAddressValue}
                                    value={userState.address}
                                    onKeyPress={loginEnterFunc}
                                />
                                <button
                                    className="button"
                                    type="button"
                                    onClick={callEmailCheckApi}
                                >
                                    주소 확인
                                </button>
                            </div>
                            <input
                                className="field address"
                                placeholder="상세 주소"
                                type="text"
                                onChange={onChangeAddressValue}
                                value={userState.address}
                                onKeyPress={loginEnterFunc}
                            />
                        </div>
                        <div className="join-inbox-3">
                            <button
                                className="button"
                                type="button"
                                onClick={callUserApi}
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
        </>
    );
}
