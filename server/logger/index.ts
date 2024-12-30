import type { LoggerLevel } from './types';

import 'colors';

export class Logger {
  private static level: LoggerLevel = 'main';

  public static setLevel(level: LoggerLevel) {
    this.level = level;
  }

  public static debug(...chunks: any[]) {
    if (
      this.level === 'off' ||
      this.level === 'main'
    ) {
      return;
    }

    console.log('DEBUG'.bgCyan.white, ...chunks);
  }

  public static warn(...chunks: any[]) {
    if (
      this.level === 'off' ||
      this.level === 'main'
    ) {
      return;
    }

    console.log('WARN'.bgYellow.white, ...chunks);
  }

  public static print(...chunks: any[]) {
    if (this.level === 'off') {
      return;
    }

    console.log(...chunks);
  }
}
