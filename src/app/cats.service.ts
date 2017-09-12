import { Injectable } from '@angular/core';
import {Cats} from './cats'
@Injectable()
export class CatsService {
  private data:Cats[]=[
    {id:1,name:'Барсик', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:false, owned:false,photos:['../assets/img/cat1.jpeg']},
    {id:2,name:'Федя', sex:'Male',age:'1 год',color:'Рыжий', sterilized:true, owned:false,photos:['../assets/img/cat2.jpeg']},
    {id:3,name:'Курлык', sex:'Female',age:'1 год',color:'Черный', sterilized:true, owned:false,photos:['../assets/img/cat3.jpeg']},
    {id:4,name:'Барсик', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:false, owned:false,photos:['../assets/img/cat1.jpeg']},
    {id:5,name:'Федя', sex:'Male',age:'1 год',color:'Рыжий', sterilized:true, owned:false,photos:['../assets/img/cat2.jpeg']},
    {id:6,name:'Курлык', sex:'Female',age:'1 год',color:'Черный', sterilized:true, owned:false,photos:['../assets/img/cat3.jpeg']},
    {id:7,name:'Барсик', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:false, owned:false,photos:['../assets/img/cat1.jpeg']},
    {id:8,name:'Федя', sex:'Male',age:'1 год',color:'Рыжий', sterilized:true, owned:false,photos:['../assets/img/cat2.jpeg']},
    {id:9,name:'Курлык', sex:'Female',age:'1 год',color:'Черный', sterilized:true, owned:false,photos:['../assets/img/cat3.jpeg']},
    {id:10,name:'Барсик', sex:'Male',age:'1 год',color:'Черно-белый', sterilized:false, owned:false,photos:['../assets/img/cat1.jpeg']},
    {id:11,name:'Федя', sex:'Male',age:'1 год',color:'Рыжий', sterilized:true, owned:false,photos:['../assets/img/cat2.jpeg']},
    {id:12,name:'Курлык', sex:'Female',age:'1 год',color:'Черный', sterilized:true, owned:false,photos:['../assets/img/cat3.jpeg']},
  ];

  constructor() { }
  getData(): Cats[] {

    return this.data;
  }
  addData(name:string, sex:string,age:string,color:string,sterilized:boolean,owned:boolean){
    let newID=0;
    this.data.map(cat=>newID=cat.id>newID?cat.id:newID);
    newID+=1;
    this.data.push(new Cats(newID,name, sex,age,color,sterilized,owned));
  }
  getPetById(id){
    return this.data.filter(pet=>pet.id==id)[0]
  }
}
