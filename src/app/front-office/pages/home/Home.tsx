import { FrontendLayout } from '@components';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown } from '@redux';

export const HomePage: React.FC = () => {
    const counterState = useSelector((store: any) => store.counter);
    const dispatch = useDispatch();

    const handleCountUp = useCallback(() => dispatch(countUp()), []);
    const handleCountDown = useCallback(() => dispatch(countDown()), []);

    return (
        <FrontendLayout>
            <h1>{counterState.count}</h1>
            <button onClick={handleCountUp}>count up</button>
            <button onClick={handleCountDown}>count down</button>
        </FrontendLayout>
    );
};
