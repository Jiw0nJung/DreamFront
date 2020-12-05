/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../reducer';
import { reportAction } from '../action';

/**
 * @description Report Redux에 대한 Custom Hook
 */
export default function useReportState() {
    const report = useSelector((state: RootState) => state.reportReducer);
    const dispatch = useDispatch();

    /**
     * @description Title 설정
     */
    const setTitle = useCallback(
        (title: string) => dispatch(reportAction.setTitle(title)),
        [dispatch],
    );

    /**
     * @description Content 설정
     */
    const setContent = useCallback(
        (content: string) => dispatch(reportAction.setContent(content)),
        [dispatch],
    );

    /**
     * @description Image 값 설정
     */
    const setImage = useCallback(
        (image: string) => dispatch(reportAction.setImage(image)),
        [dispatch],
    );

    /**
     * @description Category 값 설정
     */
    const setCategory = useCallback(
        (category: string) => dispatch(reportAction.setCategory(category)),
        [dispatch],
    );

    /**
     * @description Process 값 설정
     */
    const setProcess = useCallback(
        (process: string) => dispatch(reportAction.setProcess(process)),
        [dispatch],
    );

    /**
     * @description API서버에서 Token 값을 가져와 설정
     */
    const callReportApi = useCallback(
        () => dispatch(reportAction.callReportApi()),
        [dispatch],
    );

    /* ----------------- */
    /* Login Redux Utils */
    /* ----------------- */

    return {
        state: report,
        setTitle,
        setContent,
        setImage,
        setCategory,
        setProcess,
        callReportApi,
    };
}
