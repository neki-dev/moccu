export declare class Context {
    private static memory;
    static use<T extends object>(key: string): T;
    static clear(key?: string): void;
}
