export class Test {
  constructor (
    public id: number,
    public name: string,
  ) { }

  static getTest(): Test{
      let id = 1;
      let name = 'test record';
      
      return new Test(id, name);
  }
}
