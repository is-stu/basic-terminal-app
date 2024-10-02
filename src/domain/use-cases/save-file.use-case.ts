import fs from 'fs';

interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

interface Options {
  base: number;
  fileContent: string;
  filePath?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * Storage repository - Dependency Injection - si tuvieramos uno, lo usariamos
   */ {}

  execute({ fileContent, filePath = 'outputs', fileName, base }: Options) {
    try {
      fs.mkdirSync(filePath, { recursive: true });
      const fileNameToSave = fileName || `${base}-multiplication-table.txt`;
      fs.writeFileSync(`${filePath}/${fileNameToSave}`, fileContent);
      console.log(`File saved to ${filePath}/${fileNameToSave}`);
      return true;
    } catch (error) {
      console.error('Error saving file', error);
      return false;
    }
  }
}
