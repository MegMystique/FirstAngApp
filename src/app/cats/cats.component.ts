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
  newCat:Cats=new Cats();

  constructor(private catsService:CatsService) {}
    toggleCatComplete(cat){
      this.catsService.toggleCatComplete(cat);

    }
  addCat()
  {
    this.catsService.addCat( this.newCat );
    this.newCat = new Cats();
  }

  removeCat( cat )
  {
    this.catsService.deleteCatById( cat.id );
  }

  get all_cats()
  {
    return this.catsService.getAllCats();
  }


  ngOnInit() {

  }

}
