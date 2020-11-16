import { KbToMbPipe } from './kb-to-mb.pipe';

const mockData = {
  sizeInKb: 25632563,
  sizeAfterChange: '25632.563 Mb'
};

describe('KbToMbPipe', () => {
  it('create an instance', () => {
    const pipe = new KbToMbPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return ', () => {
    const pipe = new KbToMbPipe();
    expect(pipe.transform(mockData.sizeInKb)).toEqual(mockData.sizeAfterChange);
  });
});
