const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects.toThrow(/Infelizmente não podemos atender.../);
  });
});
