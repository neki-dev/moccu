import express from "express";

import { MoccuStorage } from "./storage";
import { MoccuRoute } from "./route";
import { Logger } from "./logger";

export class MoccuServer {
  static async boot() {
    const config = await MoccuStorage.load();

    if (config.logger) {
      Logger.setLevel(config.logger);
    }

    const app = express();

    app.use(express.json());
    app.use((req, res, next) => {
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
      new MoccuRoute(app, config, route);
    });

    app.listen(config.port, () => {
      Logger.print(`Mock server is running on ` + `http://localhost:${config.port}`.underline);
    });
  }
}
