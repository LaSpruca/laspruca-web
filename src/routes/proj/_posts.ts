import fs from 'fs';
import path from 'path';
import marked from 'marked';
import YAML from 'yaml';
// import type {ProjectPage} from "../_types";

export function getPosts()/*: ProjectPage[] */ {
    const slugs = fs.readdirSync('projects')
        .filter(file => path.extname(file) === '.md')
        .map(file => file.slice(0, -3));

    return slugs.map(getPost).sort((a, b) => {
        // @ts-ignore
        return a.metadata.date < b.metadata.date ? 1 : -1;
    });
}

export function getPost(slug)/*: ProjectPage */{
    const file = `projects/${slug}.md`;
    if (!fs.existsSync(file)) return null;

    const markdown = fs.readFileSync(file, 'utf-8');

    const { html: content, metadata } = process_markdown(markdown);

    metadata.date = new Date(`${metadata.date}`);
    metadata.dataString = metadata.date.toDateString();

    const html = marked(content);

    return {
        slug,
        metadata,
        html
    };
}

function process_markdown(markdown)/*: ProjectPage */ {
    const match = /---\n([\s\S]+?)\n---/.exec(markdown);
    const frontMatter = match[1];
    const content = markdown.slice(match[0].length);
    const metadata = YAML.parse(frontMatter);

    return { metadata, html: content, slug: "" };
}
