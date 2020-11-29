import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { validateLoginToken } from '../utils/validation';
import { loadLoginToken, deleteLoginToken } from '../utils/session';

import { RootState } from '../reducer';
import { loginAction } from '../action';

/**
 * @description Login Redux에 대한 Custom Hook
 */
export default function useLoginState() {
    const login = useSelector((state: RootState) => state.loginReducer);
    const dispatch = useDispatch();

    /**
     * @description ID 값 설정
     */
    const setId = useCallback((id: string) => dispatch(loginAction.setId(id)), [
        dispatch,
    ]);

    /**
     * @description Password 값 설정
     */
    const setPassword = useCallback(
        (password: string) => dispatch(loginAction.setPassword(password)),
        [dispatch],
    );

    /**
     * @description Token 값 설정
     */
    const setToken = useCallback(
        (token: string | null) => dispatch(loginAction.setToken(token)),
        [dispatch],
    );

    /**
     * @description API서버에서 Token 값을 가져와 설정
     */
    const callLoginApi = useCallback(
        () => dispatch(loginAction.callLoginApi()),
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
        if (validateLoginToken(login.token)) return true;

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
    }, [login.token, setToken]);

    return {
        state: login,
        setId,
        setPassword,
        setToken,
        callLoginApi,
        Logout,
        isLogined,
    };
}
