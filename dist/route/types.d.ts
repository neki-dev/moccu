export type MoccuRouteConfig<T extends object = any> = {
    path: string;
    method: 'get' | 'delete' | 'post' | 'put' | 'patch' | 'options';
    response: T | ((req: Request) => T);
    status?: number;
};
