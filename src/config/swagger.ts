const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple typescript + Jest + Express app',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express + Typescript + Jest + Supertest documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Quentin Danneville',
        email: 'quentin.danneville@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1/'
      }
    ]
  },
  apis: ['../api/book/config/routes']
};

export default options;
