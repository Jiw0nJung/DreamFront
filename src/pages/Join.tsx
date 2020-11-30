import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function Join(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>회원가입</title>
            </Helmet>
            <Header />
            <div className="join-container">회원가입 페이지</div>
        </>
    );
}
