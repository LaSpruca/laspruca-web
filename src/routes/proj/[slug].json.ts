import { getPost } from './_posts';

const lookup = new Map();

export function get(req, res) {
    const { slug } = req.params;

    if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
        const post = getPost(slug);
        if (post) {
            lookup.set(slug, JSON.stringify(post));
        }
    }

    const json = lookup.get(slug);

    console.log(lookup.keys());

    console.log(slug);

    if (json) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(json);
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}