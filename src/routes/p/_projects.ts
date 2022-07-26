import type {Project} from '$lib/types/project';

type Page = {
    metadata: {
        title: string;
        date: string;
        description: string;
        gitRepo?: string;
        website?: string;
    },
}

export async function loadProjects(): Promise<Project[]> {
    return (await Promise.all(
        Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
            // Get the page metadata
            const metadata = await page() as Page;

            // Get the slug of the project
            const slug = getSlug(path);

            // Return an object containg the information
            return {...metadata['metadata'], date: new Date(metadata['metadata']['date']), slug};
        })
    )).filter((f) => f.slug != "unknown").sort(({date: dA}, {date: dB}) =>
        dA > dB ? 1 : (dA < dB) ? -1 : 0)
}

export async function loadSixRecentProjects(): Promise<Project[]> {
    return (await loadProjects()).reverse().slice(0, 6);
}

function getSlug(path: string): string {
    return (path.split("/").pop() ?? "unknown").split(".").shift() ?? "unknown";
}
