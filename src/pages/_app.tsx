import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { NextPageContext } from 'next';
import { Provider } from 'react-redux';
import { store } from '@redux';

interface AppContext extends NextPageContext {
    store: any;
}

class NextBlog extends App<AppContext> {
    render() {
        const { store, Component, ...props } = this.props;
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    }
}

export default withRedux(store)(NextBlog);
