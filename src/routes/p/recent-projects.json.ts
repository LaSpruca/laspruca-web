import type {RequestHandlerOutput} from '@sveltejs/kit';
import {loadSixRecentProjects} from './_projects';

export async function GET(): Promise<RequestHandlerOutput> {
    return {
        body: JSON.stringify(await loadSixRecentProjects())
    }
}