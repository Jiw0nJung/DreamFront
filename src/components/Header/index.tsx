import React from 'react';

export default function Header(): JSX.Element {
    return (
        <div className="header-container">
            <img
                alt="dream-logo"
                srcSet="/image/dream-logo.png"
                width="100px"
            />
        </div>
    );
}
