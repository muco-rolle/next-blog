import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';

const loggerMiddleware = createLogger();

export const store = () => {
    const developmentEnv = process.env.NODE_ENV !== 'production';
    const middlewares = developmentEnv
        ? [thunkMiddleware, loggerMiddleware]
        : []; // loggerMiddleware

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    return store;
};
