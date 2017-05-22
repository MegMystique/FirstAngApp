export class Cats {
  id:number;
  name:string='';
  sex:string;
  age:string='';
  color:'';
  sterilized:boolean=false;
  owned:boolean=false;
  constructor(values:Object={}) {
    Object.assign(this,values)
  }
}
