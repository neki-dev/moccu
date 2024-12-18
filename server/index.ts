import express from "express";

import { MoccuStorage } from "./storage";
import { MoccuRoute } from "./route";

export class MoccuServer {
  static async boot() {
    const config = await MoccuStorage.load();

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
      console.log(`Mock server is running on http://localhost:${config.port}`);
    });
  }
}
