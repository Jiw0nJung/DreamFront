import React from 'react';

interface PrepareProps {
    text: string;
}
export default function Prepare({ text }: PrepareProps): JSX.Element {
    return (
        <div className="prepare-container">
            <div className="prepare-image-wrapper">컴퓨터 이미지 자리</div>
            <div className="prepare-content-wrapper">
                {text}
                <br />
                오픈 준비중입니다.
            </div>
        </div>
    );
}
