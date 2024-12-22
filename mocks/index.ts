import { Context } from "../server/context";
import type { Request } from "../server/export";
import type { MockContext } from "./types";

export default [
  {
    method: 'get',
    path: '/greet',
    response: () => {
      const ctx = Context.use<MockContext>('testContext');
      return {
        message: `Hello, ${ctx.name ?? 'Noname'}!`,
      };
    },
  },
  {
    method: 'put',
    path: '/rename',
    response: (req: Request) => {
      const ctx = Context.use<MockContext>('testContext');
      ctx.name = req.body.value ?? 'Unnamed';
    },
  },
];
