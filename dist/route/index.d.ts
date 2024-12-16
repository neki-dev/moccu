import type { Express } from 'express';
import type { MoccuRouteConfig } from './types';
export declare class MoccuRoute {
    constructor(app: Express, base: string, { status, response, method, path }: MoccuRouteConfig);
}
