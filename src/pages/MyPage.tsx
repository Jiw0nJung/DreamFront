import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function MyPage(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>마이페이지</title>
            </Helmet>
            <Header />
            <div className="mypage-container">메인페이지</div>
        </>
    );
}
