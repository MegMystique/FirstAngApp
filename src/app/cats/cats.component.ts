import {Component, OnInit, Input} from '@angular/core';
import {CatsService} from '../cats.service';
import {Router} from '@angular/router';
import {Cats} from '../cats';
import { NgModel} from '@angular/forms';
import {SelectCatComponent} from '../select-cat/select-cat.component';
import {ng2Parallax} from 'ang2-parallax/ng2parallax';
import {Routes, RouterModule} from '@angular/router';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers: [CatsService]
})
export class CatsComponent implements OnInit {
  cats: Cats[] = [];
  photo: string;
  cat={name:'', sex:'',age:'',color:'', sterilized:false, owned:false,photos:['']};
  constructor(private catService: CatsService) {
  }

  addItem(name: string, sex: string, age: string, color: string, sterilized: boolean = false, owned: boolean = false, photos: string[]) {
    this.catService.addData(name, sex, age, color, sterilized, owned)
  }


  ngOnInit() {
    this.cats = this.catService.getData();
  }

}
