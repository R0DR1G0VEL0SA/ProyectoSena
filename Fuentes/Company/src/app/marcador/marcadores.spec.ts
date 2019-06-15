import { Marcadores } from './marcadores';

describe('Marcadores', () => {
  it('should create an instance', () => {
    expect(new Marcadores(this.lat, this.lng, this.title, this.description)).toBeTruthy();
  });
});

