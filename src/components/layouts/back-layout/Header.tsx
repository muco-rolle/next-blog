import React from 'react';
import Link from 'next/link';
import { logout } from '@utils';

export const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/admin">Dashboard</Link>
                </li>

                <li>
                    <Link href="/admin/posts">Posts</Link>
                </li>

                <li>
                    <Link href="/admin/posts/create">Create Posts</Link>
                </li>

                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </header>
    );
};
