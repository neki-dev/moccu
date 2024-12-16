export default [
  {
    method: 'get',
    path: '/test',
    status: 200,
    response: () => {
      return {
        message: 'Hello, Moccu!',
      };
    },
  },
];
