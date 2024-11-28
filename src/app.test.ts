import { ServerApp } from './presentation/server-app';

describe('Test-appts', () => {
  test('Should call server.run with values', async () => {

    const serverAppMock = jest.fn();
    ServerApp.start = serverAppMock;
    process.argv = ['node', 'app.ts', '--base', '5', '--limit', '20'];

    await import('./app');

    expect(serverAppMock).toHaveBeenCalledWith(
      {
        base: 5,
        limit: 20,
        show: false,
        fileName: undefined,
        filePath: 'outputs'
      });
  });
});
