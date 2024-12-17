import express from "express";

import { MoccuStorage } from "./storage";
import { MoccuRoute } from "./route";

export class MoccuServer {
  static async boot() {
    const app = express();
    app.use(express.json());

    const config = await MoccuStorage.load();

    config.routes.forEach((route) => {
      new MoccuRoute(app, config, route);
    });

    app.listen(config.port, () => {
      console.log(`Mock server is running on http://localhost:${config.port}`);
    });
  }
}
