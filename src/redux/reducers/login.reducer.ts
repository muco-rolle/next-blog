import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

const initialState = {
    token: '',
    loading: false,
    error: null
};

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loading: true };
        }

        case LOGIN_SUCCESS: {
            return { ...state, token: action.token, loading: false };
        }

        case LOGIN_FAILURE: {
            return { ...state, error: action.error, loading: false };
        }
        default:
            return state;
    }
};
