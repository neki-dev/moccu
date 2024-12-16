import type { Express } from 'express';
import type { MoccuRouteConfig } from './types';
import type { MoccuConfig } from '../config/types';
export declare class MoccuRoute {
    constructor(app: Express, config: MoccuConfig, { status, response, method, path }: MoccuRouteConfig);
}
