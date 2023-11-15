import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error404/error404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    Error404Component,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
