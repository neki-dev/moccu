## 📟 Moccu
[![Npm package version](https://badgen.net/npm/v/moccu)](https://npmjs.com/package/moccu)

Simple mock server for front-end applications

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
import type { MoccuConfig } from 'moccu';

const config: MoccuConfig = {
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
   * Display logs
   */
  log: true,
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
import type { MoccuConfig } from 'moccu';

import getUser from './__mocks__/get-user';

const config: MoccuConfig = {
  port: 3000,
  base: '/api',
  routes: [
    getUser,
  ],
};

export default config;
```
