import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ViewDeckComponent } from './components/view-deck/view-deck.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        ViewDeckComponent,
        SearchCardComponent
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
