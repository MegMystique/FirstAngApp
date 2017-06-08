import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-cat',
  templateUrl: './select-cat.component.html',
  styleUrls: ['./select-cat.component.sass']
})
export class SelectCatComponent implements OnInit {
  gender: string[]=["Male", "Female", "Indefinite"];


  constructor() { }

  ngOnInit() {
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    console.log(this.gender);}
}
