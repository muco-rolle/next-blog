import React from 'react';
import { CreatePostPage } from '@back-office-pages';
import { withAuth } from '@utils';

function CreatePost() {
    return <CreatePostPage />;
}

export default withAuth(CreatePost);
