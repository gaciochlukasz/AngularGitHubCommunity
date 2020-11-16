import { NoDataPipe } from './no-data.pipe';

const mockArray = ['', null, undefined];

describe('Pipe: NoDatae', () => {
  it('create an instance', () => {
    const pipe = new NoDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('should empty string/null/undefined return as No data.', () => {
    const pipe = new NoDataPipe();
    mockArray.forEach(element => {
      expect(pipe.transform(element)).toEqual('No data.');
    });
  });

  it('should 0 return as 0', () => {
    const pipe = new NoDataPipe();
    expect(pipe.transform(0)).toEqual(0);
  });
});
