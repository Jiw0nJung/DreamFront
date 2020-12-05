import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useReportState, useReportState } from '../modules/hook';

export default function Report(): JSX.Element {
    // const {
    //     state: reportState,
    //     setTitle,
    //     setEmail,
    //     setPassword,
    //     setBirth,
    //     setPhone,
    //     setSchool,
    //     setAddress,
    //     callUserApi,
    //     callEmailCheckApi,
    // } = useReportState();

    // const { state: appState, showErrorMessage } = useAppState();

    // /**
    //  * @description Join 과정에서 Error가 발생하면 Message를 보여줍니다.
    //  */
    // useEffect(() => {
    //     if (appState.error.code) showErrorMessage();
    // }, [appState.error.code, setEmail, setPassword, showErrorMessage]);

    // /**
    //  * @description Username 값을 변경합니다.
    //  */
    // const onChangeUsernameValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setUsername(event.target.value),
    //     [setUsername],
    // );

    // /**
    //  * @description Email 값을 변경합니다.
    //  */
    // const onChangeEmailValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setEmail(event.target.value),
    //     [setEmail],
    // );

    // /**
    //  * @description Birth 값을 변경합니다.
    //  */
    // const onChangeBirthValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setBirth(event.target.value),
    //     [setBirth],
    // );

    // /**
    //  * @description Phone 값을 변경합니다.
    //  */
    // const onChangePhoneValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setPhone(event.target.value),
    //     [setPhone],
    // );

    // /**
    //  * @description School 값을 변경합니다.
    //  */
    // const onChangeSchoolValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setSchool(event.target.value),
    //     [setSchool],
    // );

    // /**
    //  * @description Address 값을 변경합니다.
    //  */
    // const onChangeAddressValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setAddress(event.target.value),
    //     [setAddress],
    // );

    // /**
    //  * @description Password 값을 변경합니다.
    //  */
    // const onChangePasswordValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setPassword(event.target.value),
    //     [setPassword],
    // );

    // /**
    //  * @description Password 값을 중복확인합니다.
    //  */
    // const onChangePwChkValue = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) =>
    //         setPassword(event.target.value),
    //     [setPassword],
    // );

    // /**
    //  * @description ID와 Password 값이 입력되면 버튼을 홯성화합니다.
    //  */
    // const activateButton = useMemo(() => {
    //     return Boolean(
    //         userState.email &&
    //             userState.password &&
    //             userState.user_name &&
    //             userState.school &&
    //             userState.birth &&
    //             userState.phone &&
    //             userState.address,
    //     );
    // }, [
    //     userState.email,
    //     userState.password,
    //     userState.user_name,
    //     userState.school,
    //     userState.birth,
    //     userState.phone,
    //     userState.address,
    // ]);

    // /**
    //  * @description Enter키를 눌러도 로그인이 됩니다.
    //  */
    // const loginEnterFunc = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     if (event.key === 'Enter') callUserApi();
    // };
    return (
        <>
            <Helmet>
                <title>신고</title>
            </Helmet>
            <div className="join-container">얄류</div>
        </>
    );
}
