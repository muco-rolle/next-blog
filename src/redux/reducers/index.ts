import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { loginReducer } from './login.reducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer
});
