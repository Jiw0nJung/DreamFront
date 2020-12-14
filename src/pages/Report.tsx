import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../components/Header';
import { useReportState, useAppState } from '../modules/hook';

export default function Report(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>신고상세보기</title>
            </Helmet>
        </>
    );
}
