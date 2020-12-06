import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { useReportState, useAppState } from '../modules/hook';

export default function WriteReport(): JSX.Element {
    const {
        state: reportState,
        setTitle,
        setContent,
        setImage1,
        setImage2,
        setImage3,
        setCategory,
        callReportApi,
    } = useReportState();
    const { state: appState, showErrorMessage } = useAppState();

    /**
     * @description Report 과정에서 Error가 발생하면 Message를 보여줍니다.
     */
    useEffect(() => {
        if (appState.error.code) showErrorMessage();
    }, [
        appState.error.code,
        setTitle,
        setContent,
        setImage1,
        setImage2,
        setImage3,
        setCategory,
        showErrorMessage,
    ]);

    /**
     * @description Title 값을 변경합니다.
     */
    const onChangeTitleValue = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value),
        [setTitle],
    );

    /**
     * @description Content 값을 변경합니다.
     */
    const onChangeContentValue = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(event.target.value),
        [setContent],
    );

    /**
     * @description Image 값을 변경합니다.
     */
    const onChangeImage1Value = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setImage1(event.target.value),
        [setImage1],
    );

    /**
     * @description Image 값을 변경합니다.
     */
    const onChangeImage2Value = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setImage2(event.target.value),
        [setImage2],
    );

    /**
     * @description Image 값을 변경합니다.
     */
    const onChangeImage3Value = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setImage3(event.target.value),
        [setImage3],
    );

    /**
     * @description Category 값을 변경합니다.
     */
    const onChangeCategoryValue = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(event.target.value),
        [setCategory],
    );

    /**
     * @description 버튼 활성화
     */
    const activateButton = useMemo(() => {
        return Boolean(
            reportState.title &&
                reportState.content &&
                reportState.image1 &&
                reportState.image2 &&
                reportState.image3 &&
                reportState.category &&
                reportState.process,
        );
    }, [
        reportState.title,
        reportState.content,
        reportState.image1,
        reportState.image2,
        reportState.image3,
        reportState.category,
        reportState.process,
    ]);

    return (
        <>
            <Helmet>
                <title>신고</title>
            </Helmet>
            {/* <Header /> */}
            <div className="join-container">
                신고제목
                <br />
                <input
                    className="field title"
                    placeholder="제목"
                    type="text"
                    onChange={onChangeTitleValue}
                    value={reportState.title}
                />
                <br />
                선택
                <br />
                <select
                    className="field category"
                    onChange={onChangeCategoryValue}
                    value={reportState.category}
                >
                    <option value="">선택</option>
                    <option value="확교폭력">학교폭력</option>
                    <option value="가정폭력">가정폭력</option>
                </select>
                <br />
                내용
                <br />
                <textarea
                    className="field content"
                    placeholder="내용"
                    onChange={onChangeContentValue}
                    value={reportState.content}
                />
                <br />
                첨부파일1
                <br />
                <input
                    className="field image"
                    placeholder="첨부파일"
                    type="file"
                    onChange={onChangeImage1Value}
                    value={reportState.image1}
                />
                <br />
                첨부파일2
                <br />
                <input
                    className="field image"
                    placeholder="첨부파일"
                    type="file"
                    onChange={onChangeImage2Value}
                    value={reportState.image2}
                />
                <br />
                첨부파일3
                <br />
                <input
                    className="field image"
                    placeholder="첨부파일"
                    type="file"
                    onChange={onChangeImage3Value}
                    value={reportState.image3}
                />
                <br />
                <button
                    className="button"
                    type="button"
                    onClick={callReportApi}
                    disabled={!activateButton}
                >
                    작성완료
                </button>
            </div>
        </>
    );
}
