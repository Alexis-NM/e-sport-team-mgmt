import { Style } from './style';

describe('Style', () => {
  it('devrait créer une nouvelle instance de Style', () => {
    const style = new Style('someStyle');
    expect(style).toBeInstanceOf(Style);
    expect(style.style).toBe('someStyle');
  });
});
