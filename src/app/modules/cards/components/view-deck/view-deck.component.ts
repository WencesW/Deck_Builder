import { Component, Input } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-view-deck',
  templateUrl: './view-deck.component.html',
  styleUrls: ['./view-deck.component.css']
})
export class ViewDeckComponent {
  @Input() cards: Cards[] = [];
  constructor(private cardService:CardsService) {
  }

  ngOnInit(): void {

  }

  public deleteCard(id: number){
      this.cardService.deleteCard(id);
  }
}
