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
     * @description Image1 값 설정
     */
    const setImage1 = useCallback(
        (image1: string) => dispatch(reportAction.setImage1(image1)),
        [dispatch],
    );

    /**
     * @description Image2 값 설정
     */
    const setImage2 = useCallback(
        (image2: string) => dispatch(reportAction.setImage2(image2)),
        [dispatch],
    );

    /**
     * @description Image1 값 설정
     */
    const setImage3 = useCallback(
        (image3: string) => dispatch(reportAction.setImage3(image3)),
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
     * @description Accept Term 값 설정
     */
    const setAcceptTerm = useCallback(
        (accept_term: boolean) =>
            dispatch(reportAction.setAcceptTerm(accept_term)),
        [dispatch],
    );

    /**
     * @description Empathy 값 설정
     */
    const setEmpathy = useCallback(
        (empathy: number) => dispatch(reportAction.setEmpathy(empathy)),
        [dispatch],
    );

    /**
     * @description Support 값 설정
     */
    const setSupport = useCallback(
        (support: number) => dispatch(reportAction.setSupport(support)),
        [dispatch],
    );

    /**
     * @description API서버에서 Report 가져오기
     */
    const callViewReportApi = useCallback(
        () => dispatch(reportAction.callViewReportApi()),
        [dispatch],
    );

    /**
     * @description API서버에 Report 올리기
     */
    const callWriteReportApi = useCallback(
        () => dispatch(reportAction.callWriteReportApi()),
        [dispatch],
    );

    /**
     * @description API서버에서 Report 리스트 가져오기
     */
    const callReportListApi = useCallback(
        () => dispatch(reportAction.callReportListApi()),
        [dispatch],
    );

    /**
     * @description API서버에서 공감 가져오기
     */
    const callEmpathyApi = useCallback(
        () => dispatch(reportAction.callEmpathyApi()),
        [dispatch],
    );

    /**
     * @description API서버에서 지원하기 가져오기
     */
    const callSupportApi = useCallback(
        () => dispatch(reportAction.callSupportApi()),
        [dispatch],
    );

    /* ----------------- */
    /* Report Redux Utils */
    /* ----------------- */

    return {
        state: report,
        setTitle,
        setContent,
        setImage1,
        setImage2,
        setImage3,
        setCategory,
        setAcceptTerm,
        setEmpathy,
        setSupport,
        callWriteReportApi,
        callViewReportApi,
        callReportListApi,
        callEmpathyApi,
        callSupportApi,
    };
}
