import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { SelectCatComponent } from './select-cat/select-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    SelectCatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
