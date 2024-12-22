import type { Request, Response } from "express";

import type { Route } from "./types";
import type { Config } from "../storage/types";
import { Logger } from "../logger";
import { MoccuServer } from "..";

export class MoccuRoute {
  constructor(
    config: Config,
    { status, delay = 0, response, method, path }: Route
  ) {
    const fullPath = (config.base ?? "") + path;
    const fullRoute = `${method.toUpperCase().green} ${fullPath.blue}`;

    MoccuServer.app[method](fullPath, async (req: Request, res: Response) => {
      if (delay > 0) {
        await this.delay(delay);
      }

      const body = typeof response === "function"
        ? await response(req)
        : response;

      if (body) {
        Logger.debug(`Route ${fullRoute} responsed`, body);

        res.status(status ?? 200).send(body && JSON.stringify(body));
      } else {
        Logger.debug(`Route ${fullRoute} responsed empty body`);

        res.status(status ?? 204).end();
      }
    });

    Logger.print(`~ Mock ${fullRoute}`);
  }

  private async delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
