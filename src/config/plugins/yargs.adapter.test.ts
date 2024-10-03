const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('./yargs.adapter');
  return yarg;
};

describe('YargsAdapter', () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  
  test('Should return default values', async () => {
    const { b, l, s, n, p } = await runCommand(['--base', '5']);
    // Si no se hace destructuring de las opciones, se puede verificar que el objeto contenga las opiones y se puede hacer un expect con
    // expect(yarg).toEqual( expect.objectContaining({ b: 5, l: 10, s: false, n: undefined, p: 'outputs' }));
    // Y de esta manera se puede hacer un expect con una sola línea validando que todas las opciones estén definidas
    expect(b).toBe(5);
    expect(l).toBe(10);
    expect(s).toBe(false);
    expect(n).toBeUndefined();
    expect(p).toBe('outputs');
  });

  test('Should return configuration with custom values', async () => {
    const { b, l, s, n, p } = await runCommand([
      '--base',
      '5',
      '--limit',
      '20',
      '--show',
      '--name',
      'custom-file-name',
      '--path',
      'custom-output-path',
    ]);
    expect(b).toBe(5);
    expect(l).toBe(20);
    expect(s).toBe(true);
    expect(n).toBe('custom-file-name');
    expect(p).toBe('custom-output-path');
  });
});
