import type { Request, Response } from "express";
import type { Express } from "express";
import type { Route } from "./types";
import type { Config } from "../storage/types";

export class MoccuRoute {
  constructor(
    app: Express,
    config: Config,
    { status = 200, delay = 0, response, method, path }: Route
  ) {
    const fullPath = (config.base ?? "") + path;

    app[method](fullPath, async (req: Request, res: Response) => {
      const body =
        typeof response === "function" ? await response(req) : response;

      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      if (config.log) {
        console.log(
          `> Route ${method.toUpperCase()} ${fullPath} responsed`,
          body
        );
      }

      res.status(status).send(body && JSON.stringify(body));
    });

    if (config.log) {
      console.log(`~ Route ${method.toUpperCase()} ${fullPath} mocked`);
    }
  }
}
