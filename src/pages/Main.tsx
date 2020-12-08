import React, { useCallback } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useUserState } from '../modules/hook';

import Header from '../components/MainHeader';
import Menu from '../components/Menu';
import List from '../components/List';
import PATH from '../constants/path';

export default function Main({ history }: RouteChildrenProps): JSX.Element {
    const { isLogined, Logout } = useUserState();

    const redirectMain = useCallback(() => {
        history.push(PATH.main);
    }, [history]);

    const redirectMyPage = useCallback(() => {
        if (isLogined) history.push(PATH.mypage);
        else history.push(PATH.login);
    }, [isLogined, history]);

    const redirectLogin = useCallback(() => {
        history.push(PATH.login);
    }, [history]);

    const redirectJoin = useCallback(() => {
        history.push(PATH.join);
    }, [isLogined, history]);
    return (
        <>
            <Helmet>
                <title>꿈</title>
            </Helmet>
            <Header
                isLogined={isLogined}
                Logout={Logout}
                redirectMain={redirectMain}
                redirectMyPage={redirectMyPage}
                redirectLogin={redirectLogin}
                redirectJoin={redirectJoin}
            />
            <div className="dream-container">
                <div className="intro-container">
                    <p className="intro-wrapper">
                        꿈이었으면 좋겠다
                        <br /> 새로운 꿈을 꾸고싶다
                        <br />
                        <span> text 정해야할듯?</span>
                    </p>
                </div>
                <Menu isLogined={isLogined} />
                <div className="list-container">
                    <List title="학교폭력" />
                    <List title="가정폭력" />
                </div>
            </div>
            <div className="footer-container">
                COPYRIGHT (C) Team Dream Hi All Rights Reserved.
            </div>
        </>
    );
}
