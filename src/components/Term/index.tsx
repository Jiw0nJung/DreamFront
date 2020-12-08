import React from 'react';

import { terms } from '../../constants/text';

import useReportState from '../../modules/hook/useReportState';

import TextBox from './TextBox';
import CustomSelecBox from './CustomSelectBox';

/**
 * @description 개인 정부 수집 동의 정보를 수집하는 컴포넌트
 */
export default function Term(): JSX.Element {
    const { state: report, setAcceptTerm } = useReportState();
    return (
        <div className="term-container">
            <p className="term-title">개인정보 수집 및 이용 동의</p>
            <TextBox title={terms.title} content={terms.content} />
            <CustomSelecBox
                text="개인정보 수집 및 이용에 동의합니다."
                selected={report.accept_term}
                onClick={setAcceptTerm}
            />
        </div>
    );
}
