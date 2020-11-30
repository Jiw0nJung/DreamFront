import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function Report(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>신고</title>
            </Helmet>
            <Header />
            <div className="report-container">신고페이지</div>
        </>
    );
}
