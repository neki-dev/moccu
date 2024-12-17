import type { Request } from 'express';
export type MoccuRouteConfig<T extends object = any> = {
    /**
     * Request path
     */
    path: string;
    /**
     * Request method
     */
    method: 'get' | 'delete' | 'post' | 'put' | 'patch' | 'options';
    /**
     * Response status
     */
    status?: number;
    /**
     * Response body
     */
    response: T | ((req: Request) => Promise<T>);
    /**
     * Response delay
     */
    delay?: number;
};
