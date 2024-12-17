import type { Route } from "../route/types";

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
   * Display logs
   */
  log?: boolean;
};
