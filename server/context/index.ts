export class Context {
  private static memory: Map<string, object> = new Map();

  public static use<T extends object>(key: string) {
    let ctx = this.memory.get(key);
    if (!ctx) {
      ctx = {};
      this.memory.set(key, ctx);
    }

    return ctx as Partial<T>;
  }

  public static clear(key?: string) {
    if (key) {
      this.memory.delete(key);
    } else {
      this.memory.clear();
    }
  }
}
