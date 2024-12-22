"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    static use(key) {
        let ctx = this.memory.get(key);
        if (!ctx) {
            ctx = {};
            this.memory.set(key, ctx);
        }
        return ctx;
    }
    static clear(key) {
        if (key) {
            this.memory.delete(key);
        }
        else {
            this.memory.clear();
        }
    }
}
exports.Context = Context;
Context.memory = new Map();
