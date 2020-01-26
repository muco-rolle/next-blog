import React, { Fragment } from 'react';
import { Header } from '../header';

interface ILayoutProps {
    children: React.ReactNode;
}

export const FrontendLayout = (props: ILayoutProps) => {
    return (
        <Fragment>
            <Header />
            <div>{props.children}</div>
        </Fragment>
    );
};
