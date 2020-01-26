import { withAuth } from '@utils';
import { PostsPage } from '@back-office-pages';

function PostIndex() {
    return <PostsPage />;
}

export default withAuth(PostIndex);
