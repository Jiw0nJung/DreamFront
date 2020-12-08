import React, { useMemo } from 'react';

export interface TextBoxProps {
    title: string;
    content: string[];
}

/**
 * @description 한정적인 높이에서 스크롤로 텍스트를 제공하는 컴포넌트
 * @param {string} title 텍스트 제목
 * @param {string[]} content 텍스트 내용 리스트
 */
export default function TextBox({ title, content }: TextBoxProps): JSX.Element {
    // content의 문자열 리스트를 <p> 태그로 리스트로 변경
    const contents = useMemo(
        () =>
            content.map((str, index) => (
                <p className="text-box-content" key={index}>
                    {`${index + 1}. ${str}`}
                </p>
            )),
        [content],
    );

    return (
        <div className="text-box-container">
            <p className="text-box-container-title">{title}</p>
            {contents}
        </div>
    );
}
