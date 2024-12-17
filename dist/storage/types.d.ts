import type { MoccuRouteConfig } from "../route/types";
export type MoccuConfig = {
    base?: string;
    port: number;
    routes: MoccuRouteConfig[];
    log?: boolean;
};
