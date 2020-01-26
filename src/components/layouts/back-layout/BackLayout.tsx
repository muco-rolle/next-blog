import React, { Fragment } from 'react';
import { Header } from './Header';

interface IBackLayout {
    children: React.ReactNode;
}

export const BackLayout = (props: IBackLayout) => {
    return (
        <Fragment>
            <Header />
            <div>{props.children}</div>
        </Fragment>
    );
};
