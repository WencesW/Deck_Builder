import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards } from 'src/app/core/Models';

@Component({
  selector: 'app-view-deck',
  templateUrl: './view-deck.component.html',
  styleUrls: ['./view-deck.component.css']
})
export class ViewDeckComponent {
  @Input() cards: Cards[] = [];
  @Output() cardToDelete: EventEmitter<number> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {

  }

  public deleteCard(id: number) {
    this.cardToDelete.emit(id);
  }
}
