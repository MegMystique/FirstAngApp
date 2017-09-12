import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-show-one-pet',
  templateUrl: './show-one-pet.component.html',
  styleUrls: ['./show-one-pet.component.sass']
})
export class ShowOnePetComponent implements OnInit {
  @Input() cat:object;
  constructor() { }

  ngOnInit() {
  }

}
