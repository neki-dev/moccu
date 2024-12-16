"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoccuRoute = void 0;
class MoccuRoute {
    constructor(app, config, { status = 200, response, method, path }) {
        var _a;
        const fullPath = ((_a = config.base) !== null && _a !== void 0 ? _a : '') + path;
        app[method](fullPath, (req, res) => {
            const body = typeof response === 'function' ? response(req) : response;
            if (config.log) {
                console.log(`> Route ${method.toUpperCase()} ${fullPath} response`, body);
            }
            res.status(status).send(body && JSON.stringify(body));
        });
        if (config.log) {
            console.log(`~ Route ${method.toUpperCase()} ${fullPath} mocked`);
        }
    }
}
exports.MoccuRoute = MoccuRoute;
