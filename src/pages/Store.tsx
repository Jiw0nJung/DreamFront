import React from 'react';
import Header from '../components/Header';
import Prepare from '../components/Prepare';

export default function Store(): JSX.Element {
    return (
        <>
            <Header />
            <div className="store-container">
                <Prepare text="스토어" />
            </div>
        </>
    );
}
