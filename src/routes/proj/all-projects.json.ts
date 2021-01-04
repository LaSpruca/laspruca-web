import { getPosts } from './_posts';

export function get(req, res) {
    let posts = getPosts();

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(posts.map(post => {
        return {
            slug: post.slug,
            metadata: post.metadata
        }
    })));
}
