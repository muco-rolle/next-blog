import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';
import axios from 'axios';
import { redirectTo, login } from '@utils';
import { routes } from '@config';

export const loginAction = (username: string) => async (dispatch: any) => {
    dispatch(request());
    try {
        const response = await axios.post('/api/login', { username });
        login(response.data);
        redirectTo(routes.dashboard);
        dispatch(success(response.data));
    } catch (error) {
        dispatch(failure(error.response && error.response));
    }

    function request() {
        return { type: LOGIN_REQUEST };
    }
    function success(token: string) {
        return { type: LOGIN_SUCCESS, token };
    }
    function failure(error: any) {
        return { type: LOGIN_FAILURE, error };
    }
};
