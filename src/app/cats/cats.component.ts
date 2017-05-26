import { Component, OnInit } from '@angular/core';
import {CatsService} from '../cats.service';
import {Cats} from '../cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers:[CatsService]
})
export class CatsComponent implements OnInit {
  items:Cats[]=[];
  all_sex: string[]=["Male", "Female", "Undefinite"];
  constructor(private catService:CatsService) {}
  addItem(name:string, sex:string,age:string,color:string,sterilized:boolean=false,owned:boolean=false){
    this.catService.addData(name, sex,age,color,sterilized,owned)
  }


  ngOnInit() {
    this.items = this.catService.getData();
  }

}
