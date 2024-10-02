import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface ServerAppOptions {
  base: number;
  limit: number;
  show: boolean;
  fileName?: string;
  filePath?: string;
}

export class ServerApp {
  public static async start({ base, limit, show, fileName, filePath }: ServerAppOptions) {
    console.log('ServerApp started');
    const table = new CreateTable().execute({ base, limit });
    if (show) console.log(table);
    new SaveFile().execute({ base, fileContent: table, fileName, filePath });
  }
}
