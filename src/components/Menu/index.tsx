import React, { useCallback } from 'react';

import { PATH } from '../../constants/path';

import Move from './Move';

interface MenuProps {
    isLogined: boolean;
}
/**
 * @description Menu 컴포넌트
 */
export default function Menu({ isLogined }: MenuProps): JSX.Element {
    const redirectReport = useCallback(() => {
        if (isLogined) document.location.href = PATH.writereport;
        else document.location.href = PATH.login;
    }, [isLogined, history]);

    const redirectStore = useCallback(() => {
        document.location.href = PATH.store;
    }, [isLogined, history]);

    return (
        <div className="menu-container">
            <Move
                imageName="house"
                text="가정폭력 신고하기"
                key="0"
                onClick={redirectReport}
            />
            <Move
                imageName="school"
                text="학교폭력 신고하기"
                key="1"
                onClick={redirectReport}
            />
            <Move
                imageName="store"
                text="스토어"
                key="2"
                onClick={redirectStore}
            />
        </div>
    );
}
