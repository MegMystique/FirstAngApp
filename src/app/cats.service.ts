import { Injectable } from '@angular/core';
import {Cats} from './cats'
@Injectable()
export class CatsService {
  lastId: number = 0;
  all_cats:Cats[]=[];
  constructor() { }
  addCat(cat:Cats):CatsService{
    if (!cat.name){
      return;
    }
    if (!cat.id){
      cat.id=++this.lastId;
    }
    this.all_cats.push(cat);
    return this;
  }
  deleteCatById( id: number ): CatsService
  {
    this.all_cats = this.all_cats
      .filter( cat => cat.id !== id );

    return this;
  }
  updateCatById( id: number, values: Object = {} ): Cats
  {
    let cat = this.getCatById( id );

    if ( !cat )
    {
      return null;
    }

    Object.assign( cat, values );

    return cat;
  }
  getAllCats(): Cats[]
  {
    return this.all_cats;
  }

  /*
   * Имитируем метод GET при обращении к /todos/:id
   * */
  getCatById( id: number ): Cats
  {
    return this.all_cats
      .filter( cat => cat.id === id )
      .pop();
  }

  /*
   * Изменить статус записи
   * */
  toggleCatComplete( cat: Cats )
  {
    let updatedCat = this.updateCatById( cat.id, {
      owned: !cat.owned
    } );

    return updatedCat;
  }
}
