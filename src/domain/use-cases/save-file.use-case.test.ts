import { existsSync, mkdirSync, readFileSync, rmSync } from 'fs';
import fs from 'fs';
import { Options, SaveFile } from './save-file.use-case';
import { after } from 'node:test';

describe('SaveFileUseCase', () => {
  afterEach(() => {
    const outputsExists = existsSync('outputs');
    if (outputsExists) rmSync('outputs', { recursive: true });
  });

  test('Should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/2-multiplication-table.txt';
    const options = {
      base: 2,
      fileContent: '2 x 2 = 4',
    };

    const result = saveFile.execute(options);
    const checkFileExists = existsSync(filePath);
    const checkFileContent = readFileSync(filePath, 'utf8');

    expect(result).toBe(true);
    expect(checkFileExists).toBe(true);
    expect(checkFileContent).toBe(options.fileContent);
  });

  test('Should save file with custom values', () => {
    const saveFile = new SaveFile();
    const options: Options = {
      base: 2,
      fileContent: 'Custom value for file content',
      fileName: 'custom-file-name',
      filePath: 'custom-output-path',
    };

    const result = saveFile.execute(options);
    const checkFileExists = existsSync(options.filePath!);
    const checkFileContent = readFileSync(
      `${options.filePath}/${options.fileName}`,
      'utf8'
    );

    expect(result).toBe(true);
    expect(checkFileExists).toBe(true);
    expect(checkFileContent).toBe(options.fileContent);

    after(() => {
      rmSync(options.filePath!, { recursive: true });
    });
  });

  test('Should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('Error creating directory');
    });

    const result = saveFile.execute({ base: 2, fileContent: '2 x 2 = 4' });

    expect(result).toBe(false);

    mkdirSpy.mockRestore(); // Restore the original implementation after the test
  });

  test('Should return false if file could not be created', () => {
    const saveFile = new SaveFile();
    
    const writeSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('Error creating the file');
    });

    const result = saveFile.execute({ base: 2, fileContent: '2 x 2 = 4' });

    expect(result).toBe(false);

    writeSpy.mockRestore(); // Restore the original implementation after the test
  });


});
