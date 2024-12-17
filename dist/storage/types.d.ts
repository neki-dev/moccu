import type { MoccuRouteConfig } from "../route/types";
export type MoccuConfig = {
    /**
     * Server port
     */
    port: number;
    /**
     * API url prefix
     */
    base?: string;
    /**
     * List of mocked routes
     */
    routes: MoccuRouteConfig[];
    /**
     * Display logs
     */
    log?: boolean;
};
