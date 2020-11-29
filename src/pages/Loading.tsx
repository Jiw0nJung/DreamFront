import React from 'react';
// import classnames from 'classnames';

// import { useAppState } from '../modules/hook';

export default function Loading(): JSX.Element {
    // const { state } = useAppState();

    // const containerClass = useMemo(
    //   () => classnames('loading-container', { show: state.loading }),
    //   [state.loading],
    // );

    return (
        // <div className={containerClass}>
        <div className="loading-container">
            <div className="loadingio-spinner-ellipsis-5c3cmaqa9yn">
                <div className="ldio-mc2op9d4vkn">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}
