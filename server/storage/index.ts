import path from "path";
import { existsSync, writeFileSync } from "fs";

import type { Config } from "./types";
import { STORAGE_FILE_EXTENSION_DEFAULT, STORAGE_FILE_EXTENSIONS, STORAGE_FILE_NAME } from "./const";

export class MoccuStorage {
  public static async load() {
    for (const extension of STORAGE_FILE_EXTENSIONS) {
      if (this.exist(extension)) {
        return await this.read(extension);
      }
    }

    return this.loadDefault();
  }

  public static async loadDefault() {
    this.write(STORAGE_FILE_EXTENSION_DEFAULT);
    return this.read(STORAGE_FILE_EXTENSION_DEFAULT);
  }

  private static exist(extension: string) {
    const configPath = this.getPath(extension);
    return existsSync(configPath);
  }

  private static async read(extension: string) {
    const configPath = this.getPath(extension);
    const { default: config } = await import(configPath);
    return config as Config;
  }

  private static write(extension: string) {
    const configPath = this.getPath(extension);
    const content = this.getDefault();
    writeFileSync(configPath, content);
  }

  private static getPath(extension: string) {
    return path.resolve(process.cwd(), STORAGE_FILE_NAME + extension);
  }

  private static getDefault() {
    return `import type { Config } from 'moccu';

const config: Config = {
  /**
   * Server port
   */
  port: 3000,

  /**
   * API url prefix
   */
  base: '',

  /**
   * List of mocked routes
   */
  routes: [
    // See example
    // https://github.com/neki-dev/moccu?tab=readme-ov-file#mock-route
  ],

  /**
   * Logger level
   */
  logger: 'main',
};

export default config;
`;
  }
}
