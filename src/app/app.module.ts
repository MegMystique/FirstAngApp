import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { SelectCatComponent } from './select-cat/select-cat.component';
import { ng2Parallax  } from 'ang2-parallax/ng2parallax';
import { ShowOnePetComponent } from './show-one-pet/show-one-pet.component';
import { ItemInfoPageComponent } from './item-info-page/item-info-page.component';
import {CatsService} from 'app/cats.service'
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: CatsComponent},
  { path: 'about', component: SelectCatComponent},
  { path: 'pet/:id', component: ItemInfoPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    SelectCatComponent,
    ng2Parallax,
    ShowOnePetComponent,
    ItemInfoPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
