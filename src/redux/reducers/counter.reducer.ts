import { COUNT_UP, COUNT_DOWN } from '../constants';

const initialState = {
    count: 0
};

export const counterReducer = (state = initialState, action: any) => {
    const { type } = action;

    switch (type) {
        case COUNT_UP:
            return { ...state, count: state.count + 1 };

        case COUNT_DOWN:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};
