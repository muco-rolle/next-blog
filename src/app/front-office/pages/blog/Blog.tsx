import { FrontendLayout } from '@components';
import Link from 'next/link';

interface IPostLInk {
    title: string;
    slug: string;
}

export const BlogPage = () => (
    <FrontendLayout>
        <h1>Blog</h1>
    </FrontendLayout>
);
