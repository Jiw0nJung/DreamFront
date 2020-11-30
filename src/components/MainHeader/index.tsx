import React, { useMemo } from 'react';

interface HeaderProps {
    isLogined: boolean;
    Logout: () => void;
    redirectMain: () => void;
    redirectJoin: () => void;
    redirectLogin: () => void;
    redirectMyPage: () => void;
}
export default function MainHeader({
    isLogined,
    Logout,
    redirectMain,
    redirectJoin,
    redirectLogin,
    redirectMyPage,
}: HeaderProps): JSX.Element {
    const menu = useMemo(() => {
        if (!isLogined)
            return (
                <span className="menu-wrapper">
                    <button
                        className="menu-button"
                        type="button"
                        onClick={redirectJoin}
                    >
                        회원가입
                    </button>
                    <button
                        className="menu-button"
                        type="button"
                        onClick={redirectLogin}
                    >
                        로그인
                    </button>
                </span>
            );

        return (
            <span className="menu-wrapper">
                <button
                    className="menu-button"
                    type="button"
                    onClick={redirectMyPage}
                >
                    마이페이지
                </button>
                <button className="menu-button" type="button" onClick={Logout}>
                    로그아웃
                </button>
            </span>
        );
    }, [isLogined, redirectJoin, redirectLogin, redirectMyPage, Logout]);

    return (
        <div className="main-header-container">
            <img
                alt="dream-logo"
                srcSet="/image/dream-logo.png"
                width="100rem"
                onClick={redirectMain}
            />
            {menu}
        </div>
    );
}
