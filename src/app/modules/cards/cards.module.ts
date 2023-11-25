import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ViewDeckComponent } from './components/view-deck/view-deck.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewDeckComponent,
    SearchCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ViewDeckComponent,
    SearchCardComponent
  ]
})
export class CardsModule { }
