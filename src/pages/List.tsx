import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function List(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>신고목록</title>
            </Helmet>
            <Header />
            <div className="list-container">리스트페이지</div>
        </>
    );
}
