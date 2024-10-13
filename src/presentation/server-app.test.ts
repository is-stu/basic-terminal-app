import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "../presentation/server-app";

describe('Server App test', () => {

    const options = {
        base: 2,
        limit: 20,
        show: true,
        fileName: 'test-fileName',
        filePath: 'test-filePath'
    }

    test('Should create Server App instance', () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
    })

    test('Should run with options', () => {

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.start(options);

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('ServerApp started');
        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(SaveFileSpy).toHaveBeenCalledTimes(1);
        expect(SaveFileSpy).toHaveBeenCalledWith(
            {
                base: options.base,
                fileContent: expect.stringContaining('2 x 2 = 4'),
                fileName: options.fileName,
                filePath: options.filePath
            });
    })
})