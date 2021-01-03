import fs from 'fs';
import path from 'path';
import marked from 'marked';
import YAML from 'yaml';

export function getPosts () {
    const slugs = fs.readdirSync('projects')
        .filter(file => path.extname(file) === '.md')
        .map(file => file.slice(0, -3));

    return slugs.map(getPost).sort((a, b) => {
        // @ts-ignore
        return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
    });
}

export function getPost(slug) {
    const file = `projects/${slug}.md`;
    if (!fs.existsSync(file)) return null;

    const markdown = fs.readFileSync(file, 'utf-8');

    const { content, metadata } = process_markdown(markdown);

    // @ts-ignore
    const date = new Date(`${metadata.date}`); // cheeky hack
    // @ts-ignore
    metadata.date = date.toDateString();

    const html = marked(content);

    return {
        slug,
        metadata,
        html
    };
}

function process_markdown(markdown) {
    const match = /---\n([\s\S]+?)\n---/.exec(markdown);
    const frontMatter = match[1];
    const content = markdown.slice(match[0].length);
    const metadata = YAML.parse(frontMatter);

    return { metadata, content };
}