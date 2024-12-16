"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoccuRoute = void 0;
class MoccuRoute {
    constructor(app, base, { status = 200, response, method, path }) {
        app[method](base + path, (req, res) => {
            const body = typeof response === 'function' ? response(req) : response;
            console.log(`-> Route ${method.toUpperCase()} ${base + path} response`, body);
            res.status(status).send(JSON.stringify(body));
        });
        console.log(`~ Route ${method.toUpperCase()} ${base + path} mocked`);
    }
}
exports.MoccuRoute = MoccuRoute;
