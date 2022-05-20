import { http } from './../hooks/http';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const apiUrl = process.env.REACT_APP_API_URL;

const server = setupServer();

// Before executing all tests, execute the callback function first
beforeAll(() => server.listen());

// Reset the mock route after each test run
afterEach(() => server.resetHandlers());

// Close the mock route after all tests are run
afterAll(() => server.close());

test('http method sends asynchronous request', async () => {
  const endpoint = 'test-endpoint';
  const mockResult = { mockValue: 'mock' };

  server.use(rest.get(`${apiUrl}/${endpoint}`, (req, res, ctx) => res(ctx.json(mockResult))));

  const result = await http(endpoint);
  expect(result).toEqual(mockResult);
});
