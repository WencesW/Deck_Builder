import { Component, Input } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { CardsService } from '../../services/cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-deck',
  templateUrl: './view-deck.component.html',
  styleUrls: ['./view-deck.component.css']
})
export class ViewDeckComponent {
  @Input() cards: Cards[] = [];
  constructor(private cardService:CardsService,private router: Router) {
  }

  ngOnInit(): void {

  }

  public deleteCard(id: number){
      this.cardService.deleteCard(id);
      location.reload();
  }
}
