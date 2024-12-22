import type { Request, Response } from "express";
import type { Express } from "express";
import type { Route } from "./types";
import type { Config } from "../storage/types";

export class MoccuRoute {
  constructor(
    app: Express,
    config: Config,
    { status, delay = 0, response, method, path }: Route
  ) {
    const fullPath = (config.base ?? "") + path;

    app[method](fullPath, async (req: Request, res: Response) => {
      if (delay > 0) {
        await this.delay(delay);
      }

      if (response) {
        const body = typeof response === "function"
          ? await response(req)
          : response;

        if (config.log) {
          console.log(
            `> Route ${method.toUpperCase()} ${fullPath} responsed`,
            body
          );
        }

        res.status(status ?? 200).send(body && JSON.stringify(body));
      } else {
        if (config.log) {
          console.log(
            `> Route ${method.toUpperCase()} ${fullPath} responsed empty body`
          );
        }

        res.status(status ?? 204).end();
      }
    });

    if (config.log) {
      console.log(`~ Route ${method.toUpperCase()} ${fullPath} mocked`);
    }
  }

  private async delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
