import React, { useCallback } from 'react';
import PATH from '../../constants/path';

export default function Header(): JSX.Element {
    const redirectMain = useCallback(() => {
        document.location.href = PATH.main;
    }, [history]);

    return (
        <div className="header-container">
            <img
                alt="dream-logo-white"
                srcSet="/image/dream-logo-white.png"
                height="70px"
                onClick={redirectMain}
            />
        </div>
    );
}
