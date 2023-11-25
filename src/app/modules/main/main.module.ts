import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { CardsModule } from '../cards/cards.module';



@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MainRoutingModule,
        SharedModule,
        CardsModule
    ]
})
export class MainModule { }
