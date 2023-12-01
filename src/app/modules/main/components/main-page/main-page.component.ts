import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/core/Models';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  public cards: Cards[] = [];

  constructor(private cardService: CardsService){}

  ngOnInit() {
    this.getDeck();
  }

  public getDeck() {
    this.cardService.getDeck().then(data => this.cards = data);
  }
}
