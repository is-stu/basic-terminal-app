import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
  test('Should create table with default values', () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 2 });
    const rows = table.split('\n').length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(rows).toEqual(13); //Siempre se le suma 3 por los 3 headers de la tabla
  });


  test('Should create table with custom values', () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 3, limit: 20 });
    const rows = table.split('\n').length;

    expect(rows).toEqual(23); //Siempre se le suma 3 por los 3 headers de la tabla
    expect(table).toContain('1 x 3 = 3');
    expect(table).toContain('20 x 3 = 60');
    

  });
});
