import { LowerPipe } from './lower.pipe';
let pipe;
describe('LowerPipe', () => {
  beforeEach(() => {
    pipe = new LowerPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform input to lowercase', () => {
    expect((pipe.transform('BonJouR'))).toEqual('bonjour');
  });
});
