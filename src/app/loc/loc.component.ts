import { Component, OnInit } from '@angular/core';
export class User{
  city:string[]=['Москва', 'Новосибирск', 'Новокузнецк','Томск','Омск','Киров'];
  currentCity:string;
}
@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.sass']
})
export class LocComponent implements OnInit {
  user: User = new User();
  customValidate:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  getDatas(){
    console.log(this.user.currentCity)
  }
  catchValue(){
    for (let city of this.user.city){
      if (this.user.currentCity===city){this.customValidate=true; break} else {this.customValidate=false}
    }
    console.log(this.user.currentCity,'IN',this.user.city,'BOOLEAN=',this.customValidate);
    console.log(this.customValidate);
  }
}
