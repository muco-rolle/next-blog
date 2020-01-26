import React from 'react';
import { FrontendLayout } from '@components';

interface IPostPageProps {
    slug: string;
}

export const PostPage = (props: IPostPageProps) => {
    // const post = posts.find(post => (post.slug = props.slug));
    let post = null;

    return (
        <FrontendLayout>
            <h1>Post</h1>
        </FrontendLayout>
    );
};
