import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Term from '../components/Term';
import { useReportState, useAppState } from '../modules/hook';
import PATH from '../constants/path';

export default function Detail(): JSX.Element {
    const { state: appState, showErrorMessage } = useAppState();

    return (
        <>
            <Helmet>
                <title>신고 보기</title>
            </Helmet>
            작성한 신고
        </>
    );
}
