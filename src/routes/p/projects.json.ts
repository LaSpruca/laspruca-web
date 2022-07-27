import type {RequestHandlerOutput} from '@sveltejs/kit';
import {loadProjects} from './_projects';

export async function GET(): Promise<RequestHandlerOutput> {
    return {
        body: JSON.stringify(await loadProjects())
    };
}