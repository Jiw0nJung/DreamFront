import React, { useCallback, useMemo } from 'react';
import classnames from 'classnames';

export interface CustomSelectBoxProps {
    text: string;
    selected?: boolean;
    onClick: (select: boolean) => void;
}

/**
 * @description Custom Select Box Component
 * @param {string} text 텍스트
 * @param {boolean} selected 선택 여부
 */
export default function CustomSelectBox({
    text,
    selected = false,
    onClick,
}: CustomSelectBoxProps): JSX.Element {
    // Select Box의 선택 여부에 따라 스타일 적용
    const className = classnames('custom-select-box-container', { selected });

    // Select Box 버튼을 키보드로 눌렀을 시 이벤트 콜백
    const onKeyPress = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter') onClick(!selected);
        },
        [onClick, selected],
    );
    // Select Box 체크
    const check = useMemo(() => {
        return selected ? (
            <svg
                className="symbol-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
            >
                <g fill="none" fillRule="evenodd">
                    <g>
                        <g>
                            <g>
                                <g transform="translate(-117 -1579) translate(24 1432) translate(0 89) translate(93 58)">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="#0056D0"
                                        rx="2"
                                    />
                                    <path
                                        stroke="#FFF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M5 11.233L8.35 14 15 7"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ) : (
            <svg
                className="symbol-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
            >
                <g fill="none" fillRule="evenodd">
                    <g fill="#FFF" stroke="#BBB">
                        <g>
                            <g transform="translate(-24 -1579) translate(24 1432) translate(0 89)">
                                <rect
                                    width="18"
                                    height="18"
                                    rx="2"
                                    transform="translate(1 59)"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }, [onClick, selected]);

    return (
        <div
            className={className}
            role="button"
            tabIndex={0}
            onClick={() => onClick(!selected)}
            onKeyPress={onKeyPress}
        >
            {check}
            <p className="custom-select-box-text">{text}</p>
        </div>
    );
}
