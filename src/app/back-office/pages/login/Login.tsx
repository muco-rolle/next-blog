import { BackLayout } from '@components';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '@redux';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const loginState = useSelector((store: any) => store.login);
    const dispatch = useDispatch();

    const handleLogin = useCallback(() => dispatch(loginAction(username)), [
        dispatch
    ]);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        return handleLogin();
    };

    const handleChange = (event: any) => setUsername(event.target.value);

    return (
        <BackLayout>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="username" onChange={handleChange} />
                </div>

                <button>
                    {loginState.loading ? 'Submitting...' : 'Login'}
                </button>
            </form>
        </BackLayout>
    );
};
