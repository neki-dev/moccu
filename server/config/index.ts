import path from "path";
import type { MoccuConfig } from "./types";
import { existsSync, writeFileSync } from "fs";

export async function getConfig(): Promise<MoccuConfig> {
  const configPath = path.resolve(process.cwd(), 'moccu.config.ts');

  if (existsSync(configPath)) {
    const { default: config } = await import(configPath);
    return config as MoccuConfig;
  }

  writeFileSync(configPath, `import type { MoccuConfig } from 'moccu';

const config: MoccuConfig = {
  port: 3000,
  base: '',
  log: true,
  routes: [],
};

export default config;
`);

  return {
    port: 3000,
    base: '',
    log: true,
    routes: [],
  };
}
