import { LoggerLevel } from './server/logger/types';
import type { Config } from './server/storage/types';

import routes from './mocks';

const config: Config = {
  port: 3000,
  base: '/api',
  routes,
  logger: LoggerLevel.Main,
};

export default config;
