/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { validateLoginToken } from '../utils/validation';
import { loadLoginToken, deleteLoginToken } from '../utils/session';

import { RootState } from '../reducer';
import { userAction } from '../action';

/**
 * @description User Redux에 대한 Custom Hook
 */
export default function useUserState() {
    const user = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch();

    /**
     * @description Uer Name 값 설정
     */
    const setUsername = useCallback(
        (name: string) => dispatch(userAction.setUserName(name)),
        [dispatch],
    );

    /**
     * @description EMAIL 값 설정
     */
    const setEmail = useCallback(
        (email: string) => dispatch(userAction.setEmail(email)),
        [dispatch],
    );
    /**
     * @description EMAIL_CHECK 값 설정
     */
    const setEmailCheck = useCallback(
        (emailCheck: boolean) => dispatch(userAction.setEmailCheck(emailCheck)),
        [dispatch],
    );

    /**
     * @description Password 값 설정
     */
    const setPassword = useCallback(
        (password: string) => dispatch(userAction.setPassword(password)),
        [dispatch],
    );

    /**
     * @description Password 값 설정
     */
    const setPasswordCheck = useCallback(
        (passwordChk: string) =>
            dispatch(userAction.setPasswordCheck(passwordChk)),
        [dispatch],
    );

    /**
     * @description Birth 값 설정
     */
    const setBirth = useCallback(
        (birth: string) => dispatch(userAction.setBirth(birth)),
        [dispatch],
    );

    /**
     * @description Phone 값 설정
     */
    const setPhone = useCallback(
        (phone: string) => dispatch(userAction.setPhone(phone)),
        [dispatch],
    );

    /**
     * @description School 값 설정
     */
    const setSchool = useCallback(
        (school: string) => dispatch(userAction.setSchool(school)),
        [dispatch],
    );

    /**
     * @description Address 값 설정
     */
    const setAddress = useCallback(
        (address: string) => dispatch(userAction.setAddress(address)),
        [dispatch],
    );

    /**
     * @description Address 값 설정
     */
    const setDetailAddress = useCallback(
        (detailAddress: string) =>
            dispatch(userAction.setDetailAddress(detailAddress)),
        [dispatch],
    );

    /**
     * @description Token 값 설정
     */
    const setToken = useCallback(
        (token: string | null) => dispatch(userAction.setToken(token)),
        [dispatch],
    );

    /**
     * @description API서버에서 Token 값을 가져와 설정
     */
    const callLoginApi = useCallback(
        () => dispatch(userAction.callLoginApi()),
        [dispatch],
    );

    /**
     * @description API서버에서 User 정보를 가져와 설정
     */
    const callUserApi = useCallback(() => dispatch(userAction.callUserApi()), [
        dispatch,
    ]);

    /**
     * @description API서버에서 Email이 중복되는지 확인
     */
    const callEmailCheckApi = useCallback(
        () => dispatch(userAction.callEmailCheckApi()),
        [dispatch],
    );

    /* ----------------- */
    /* Login Redux Utils */
    /* ----------------- */

    /**
     * @description Session에 저장된 Token을 삭제하고 로그아웃합니다.
     */
    const Logout = useCallback(() => {
        deleteLoginToken();
        setToken(null);
    }, [setToken]);

    /**
     * @description Login 상태를 체크합니다.
     */
    const isLogined = useMemo(() => {
        // Redux Storage에 Token이 Valid하면 통과합니다.
        if (validateLoginToken(user.token)) return true;

        // Session Storage에 Login Token이 없으면 통과하지 못합니다.
        const sessionToken = loadLoginToken();
        if (sessionToken === null) return false;

        // Session Storage의 Login Token이 유효하지 못하면 제거합니다.
        if (!validateLoginToken(sessionToken)) {
            deleteLoginToken();
            return false;
        }

        // Redux Storage에 Token을 저장합니다.
        setToken(sessionToken);
        return true;
    }, [user.token, setToken]);

    return {
        state: user,
        setUsername,
        setEmail,
        setEmailCheck,
        setPassword,
        setPasswordCheck,
        setBirth,
        setPhone,
        setSchool,
        setAddress,
        setDetailAddress,
        setToken,
        callLoginApi,
        callUserApi,
        callEmailCheckApi,
        Logout,
        isLogined,
    };
}
