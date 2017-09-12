import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CatsService} from 'app/cats.service'

@Component({
  selector: 'app-item-info-page',
  templateUrl: './item-info-page.component.html',
  styleUrls: ['./item-info-page.component.sass']
})
export class ItemInfoPageComponent implements OnInit {
  id: number;
  pet={};
  constructor(private activateRoute: ActivatedRoute, private service:CatsService) {this.id = activateRoute.snapshot.params['id']; }

  ngOnInit() {
    this.getPetById()
  }
  getPetById(){
    this.pet=this.service.getPetById(this.id);
    console.log(this.pet)
  }
}
