import { PostPage } from '@front-office-pages';
import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();

    return <PostPage slug={router.query.slug as string} />;
}
