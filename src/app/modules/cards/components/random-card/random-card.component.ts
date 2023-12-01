import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cards } from 'src/app/core/Models';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.css']
})
export class RandomCardComponent {
  public card: Cards = new Cards({ id: null });
  public cards : any=[];

  constructor( private cardService:CardsService, private router:Router) { }

  ngOnInit(): void {
    this.cardService.obtenerCartaRandom().then ( resultado => {
      this.cards=resultado;
  })
}

  public addCard(name:string,img:string){
    this.card!.png=img;
    this.card.name=name;
    this.cardService.addCardDeck(this.card)
   .then((response) => {
      if (response) {
        location.reload();
      } else {
        console.log("error");
        };
      })
    }

  public otherRandom(){
    location.reload();
  }
}
