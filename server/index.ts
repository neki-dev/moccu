import express from "express";

import { MoccuStorage } from "./storage";
import { MoccuRoute } from "./route";
import { Logger } from "./logger";

export class MoccuServer {
  public static app = express();

  static async boot() {
    const config = await MoccuStorage.load();

    if (config.logger) {
      Logger.setLevel(config.logger);
    }

    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');

      if (req.method === 'OPTIONS') {
        res.sendStatus(204);
      } else {
        next();
      }
    });

    config.routes.forEach((route) => {
      new MoccuRoute(config, route);
    });

    this.app.use((req, res) => {
      Logger.warn(`Route ${req.method.green} ${req.path.blue} isn't mocked`);
      res.sendStatus(404);
    });

    this.app.listen(config.port, () => {
      Logger.print(`Mock server is running on ` + `http://localhost:${config.port}`.underline);
    });
  }
}
