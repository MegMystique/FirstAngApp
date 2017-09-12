export class Cats {

  constructor(public id: number,
              public name: string = '',
              public sex: string,
              public age: string = '',
              public color: string,
              public sterilized: boolean = false,
              public owned: boolean = false,
              public photos: string[] = []) {
  }
}
