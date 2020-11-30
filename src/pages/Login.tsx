import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function Login(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <Header />
            <div className="login-container">로그인페이지</div>
        </>
    );
}
