import type { Route } from "../route/types";
import type { LoggerLevel } from "../logger/types";
export type Config = {
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
    routes: Route[];
    /**
     * Logger level
     */
    logger?: LoggerLevel;
};
