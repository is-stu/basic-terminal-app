export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() /**
   * DI - Dependency Injection
   */ {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let result = `========================\n MULTIPLICATION TABLE ${base}\n========================\n`;

    for (let i = 1; i <= limit; i++) {
      result += `${i} x ${base} = ${i * base}\n`;
    }
    return result;
  }
}
