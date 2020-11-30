import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Prepare from '../components/Prepare';

export default function Store(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>스토어</title>
            </Helmet>
            <Header />
            <div className="store-container">
                <Prepare text="스토어" />
            </div>
        </>
    );
}
