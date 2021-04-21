import { getPosts } from './_posts';

export function get(req, res) {
  let pages = getPosts();

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  pages.sort((a, b) => {
    let d1 = new Date(a.metadata.dataString);
    let d2 = new Date(b.metadata.dataString);

    if (d1 < d2) {
      return 1;
    } else if (d1 > d2) {
      return -1;
    } else {
      return 0;
    }
  });

  res.end(JSON.stringify(pages.splice(0, 6).map(post => {
    return {
      slug: post.slug,
      metadata: post.metadata
    }
  })));
}
