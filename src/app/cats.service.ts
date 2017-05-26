import { Injectable } from '@angular/core';
import {Cats} from './cats'
@Injectable()
export class CatsService {
  private data:Cats[]=[
    {name:'Барсик', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:true, owned:false},
    {name:'Федя', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:true, owned:false},
  ];
  getData(): Cats[] {

    return this.data;
  }
  addData(name:string, sex:string,age:string,color:string,sterilized:boolean,owned:boolean){

    this.data.push(new Cats(name, sex,age,color,sterilized,owned));
  }
  constructor() { }

}
