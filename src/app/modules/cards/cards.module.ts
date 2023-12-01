import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ViewDeckComponent } from './components/view-deck/view-deck.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { RandomCardComponent } from './components/random-card/random-card.component';


@NgModule({
    declarations: [
        ViewDeckComponent,
        SearchCardComponent,
        RandomCardComponent
    ],
    exports: [
        ViewDeckComponent,
        SearchCardComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CardsModule { }
