import type { Request, Response } from 'express';
import type { Express } from 'express';
import type { MoccuRouteConfig } from './types';
import type { MoccuConfig } from '../storage/types';

export class MoccuRoute {
  constructor(app: Express, config: MoccuConfig, { status = 200, response, method, path }: MoccuRouteConfig) {
    const fullPath = (config.base ?? '') + path;

    app[method](fullPath, (req: Request, res: Response) => {
      const body = typeof response === 'function' ? response(req) : response;

      if (config.log) {
        console.log(`> Route ${method.toUpperCase()} ${fullPath} response`, body);
      }

      res.status(status).send(body && JSON.stringify(body));
    });

    if (config.log) {
      console.log(`~ Route ${method.toUpperCase()} ${fullPath} mocked`);
    }
  }
}
