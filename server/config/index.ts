import path from "path";
import type { MoccuConfig } from "./types";
import { existsSync, writeFileSync } from "fs";

export async function getConfig(): Promise<MoccuConfig> {
  const configPath = path.resolve(process.cwd(), 'moccu.config.ts');

  if (existsSync(configPath)) {
    const { default: config } = await import(configPath);
    return config as MoccuConfig;
  }

  const defaultConfig = {
    port: 3000,
    base: '/api',
    routes: [],
  };

  const content = `export default ${JSON.stringify(defaultConfig, null, 2)};`;
  writeFileSync(configPath, content);

  return defaultConfig;
}
