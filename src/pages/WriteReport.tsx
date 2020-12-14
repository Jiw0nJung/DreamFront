import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Term from '../components/Term';
import { useReportState, useAppState } from '../modules/hook';
import PATH from '../constants/path';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WriteReport(): JSX.Element {
    const {
        state: reportState,
        setTitle,
        setContent,
        setImage1,
        setImage2,
        setImage3,
        setCategory,
        callWriteReportApi,
    } = useReportState();

    console.log(reportState);
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
                reportState.category &&
                reportState.accept_term,
        );
    }, [
        reportState.title,
        reportState.content,
        reportState.category,
        reportState.accept_term,
    ]);

    return (
        <>
            <Helmet>
                <title>신고</title>
            </Helmet>
            <Header />
            <div className="write-container">
                <div className="write-title">신고하기</div>
                <div className="write-img">
                    <p>신고 등록</p>
                    <p>추천 진행 중</p>
                    <p>추천 종료</p>
                    <img srcSet="/image/report-line.png" height="10px" />
                </div>
                <div className="write-box1">
                    <table>
                        <tr>
                            <th>신고제목</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="field title"
                                    placeholder="제목"
                                    type="text"
                                    onChange={onChangeTitleValue}
                                    value={reportState.title}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>선택</th>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="field category"
                                    onChange={onChangeCategoryValue}
                                    value={reportState.category}
                                >
                                    <option value="">선택</option>
                                    <option value="학교폭력">학교폭력</option>
                                    <option value="가정폭력">가정폭력</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                        </tr>
                        <tr>
                            <td>
                                <textarea
                                    className="field content"
                                    placeholder="내용"
                                    onChange={onChangeContentValue}
                                    value={reportState.content}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>첨부파일1</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="inputFile"
                                    placeholder="첨부파일"
                                    type="file"
                                    onChange={onChangeImage1Value}
                                    value={reportState.image1}
                                />
                                <hr></hr>
                            </td>
                        </tr>
                        <tr>
                            <th>첨부파일2</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="inputFile"
                                    placeholder="첨부파일"
                                    type="file"
                                    onChange={onChangeImage2Value}
                                    value={reportState.image2}
                                />
                                <hr></hr>
                            </td>
                        </tr>
                        <tr>
                            <th>첨부파일3</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="inputFile"
                                    placeholder="첨부파일"
                                    type="file"
                                    onChange={onChangeImage3Value}
                                    value={reportState.image3}
                                />
                                <hr></hr>
                            </td>
                        </tr>
                        <tr>
                            <th>동의서</th>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    className="agree_button"
                                    type="button"
                                    onClick={callWriteReportApi}
                                    disabled={!activateButton}
                                >
                                    <Term />
                                    <input
                                        type="checkbox"
                                        className="chk_agree"
                                        value="agree"
                                    />
                                    <span> 동의합니다</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <button
                                    className="button"
                                    type="button"
                                    disabled={!activateButton}
                                >
                                    신고하기
                                </button>
                                <button className="button" type="button">
                                    취소
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
