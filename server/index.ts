import express from "express";

import { getConfig } from "./config";
import type { MoccuConfig } from "./config/types";

import { MoccuRoute } from "./route";
import type { MoccuRouteConfig } from "./route/types";

export async function boot() {
  const app = express();
  app.use(express.json());

  const config = await getConfig();

  config.routes.forEach((route) => {
    new MoccuRoute(app, config, route);
  });

  app.listen(config.port, () => {
    console.log(`Mock server is running on http://localhost:${config.port}`);
  });
}

export type { MoccuConfig, MoccuRoute, MoccuRouteConfig };
