import React from 'react';

interface ListProps {
    title: string;
}

export default function List({ title }: ListProps): JSX.Element {
    return <div className="main-list-container">{title}</div>;
}
