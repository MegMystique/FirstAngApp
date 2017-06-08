import { Component, OnInit , Input} from '@angular/core';
import {CatsService} from '../cats.service';
import {Cats} from '../cats';
import {SelectCatComponent} from '../select-cat/select-cat.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers:[CatsService]
})
export class CatsComponent implements OnInit {
  cat:Cats[]=[];

  constructor(private catService:CatsService) {}
  addItem(name:string, sex:string,age:string,color:string,sterilized:boolean=false,owned:boolean=false){
    this.catService.addData(name, sex,age,color,sterilized,owned)
  }


  ngOnInit() {
    this.cat = this.catService.getData();
  }

}
