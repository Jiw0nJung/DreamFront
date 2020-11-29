import React from 'react';
import classnames from 'classnames';

interface MoveProps {
    imageName: string;
    text: string;
    onClick: () => void;
}

export default function Move({
    imageName,
    text,
    onClick,
}: MoveProps): JSX.Element {
    const className = classnames('move-container', imageName);
    const srcSet = `/image/${imageName}.png`;
    return (
        <div className={className} onClick={onClick}>
            <img alt={imageName} srcSet={srcSet} />
            <br />
            <p>{text}</p>
        </div>
    );
}
