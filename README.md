## 📟 Moccu
[![Npm package version](https://badgen.net/npm/v/moccu)](https://npmjs.com/package/moccu)

Simple typescript mock server with memory context

.

* ## Install

```sh
npm i moccu --save-dev
```

.

* ## Run

Run the server by command

```sh
moccu
```

.

* ## Configuration

Create and configure `moccu.config.ts` file at project root. Or it will created automatically on the first start.

```ts
import type { Config } from 'moccu';

const config: Config = {
  /**
   * Server port
   */
  port: 3000,

  /**
   * API url prefix
   */
  base: '',

  /**
   * List of mocked routes
   */
  routes: [],

  /**
   * LoggerLevel
   */
  logger: 'main',
};

export default config;
```

.

* ## Mock route

#### 1. Create mocked route

`./__mocks__/get-user.ts`
```ts
import type { Route, Request } from 'moccu';

const route: Route = {
  /**
   * Request path
   */
  path: '/user/:userId',

  /**
   * Request method
   */
  method: 'get',

  /**
   * Response status
   */
  status: 200,

  /**
   * Response body
   */
  response: (req: Request) => {
    return {
      text: `Hello, ${req.params.userId}`,
    };
  },

  /**
   * Response delay
   */
  delay: 100,
};

export default route;
```

#### 2. Import mocked route to global config

`./moccu.config.ts`
```ts
import type { Config } from 'moccu';

import getUser from './__mocks__/get-user';

const config: Config = {
  port: 3000,
  base: '/api',
  routes: [
    getUser,
  ],
};

export default config;
```

.

* ## Context example

We can change mock responses based on the global context between requests.

`./moccu.config.ts`
```ts
import type { Config, Request } from 'moccu';
import { Context } from 'moccu';

type MockContext = {
  name: string;
};

const config: Config = {
  port: 3000,
  base: '/api',
  routes: [
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
  ],
};

export default config;
```

