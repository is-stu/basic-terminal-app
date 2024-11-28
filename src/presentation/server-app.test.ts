import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe('ServerApp', () => {
  const options = {
    base: 2,
    limit: 10,
    show: false,
    fileName: 'test',
    filePath: 'outputs',
  };

  test('Should create server app instance', () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.start).toBe('function');
  });

  test('Should run server app with values', () => {
    const logSpy = jest.spyOn(console, 'log');
    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

    ServerApp.start(options);
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith('ServerApp started');
    expect(logSpy).toHaveBeenLastCalledWith(
      `File saved to ${options.filePath}/${options.fileName}`
    );
    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      base: options.base,
      fileContent: expect.any(String),
      fileName: options.fileName,
      filePath: options.filePath,
    });
  });
});
