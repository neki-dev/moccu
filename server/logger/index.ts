import { LoggerLevel } from './types';

import 'colors';

export class Logger {
  private static level: LoggerLevel = LoggerLevel.Main;

  public static setLevel(level: LoggerLevel) {
    this.level = level;
  }

  public static debug(...chunks: any[]) {
    if (
      this.level === LoggerLevel.Off ||
      this.level === LoggerLevel.Main
    ) {
      return;
    }

    console.log('DEBUG'.bgCyan.white, ...chunks);
  }

  public static warn(...chunks: any[]) {
    if (
      this.level === LoggerLevel.Off ||
      this.level === LoggerLevel.Main
    ) {
      return;
    }

    console.log('WARN'.bgYellow.white, ...chunks);
  }

  public static print(...chunks: any[]) {
    if (this.level === LoggerLevel.Off) {
      return;
    }

    console.log(...chunks);
  }
}
