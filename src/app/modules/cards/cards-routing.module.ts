import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDeckComponent } from './components/view-deck/view-deck.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

const routes: Routes = [
  {
    path:'deck',
    component : ViewDeckComponent,
  },
  {
    path:'search',
    component : SearchCardComponent,
  },
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
