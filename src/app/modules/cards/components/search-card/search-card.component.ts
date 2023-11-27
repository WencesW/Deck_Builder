import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cards } from 'src/app/core/Models';
import { Router } from '@angular/router';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {
  public card: Cards = new Cards({ id: null });
  public cards : any=[];
  public img: Cards= new Cards({image_uris:null})
  public searchForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
  });
  

  constructor(private fb: FormBuilder, private cardService:CardsService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    
    this.cardService.obtenerCarta(this.searchForm.value.name).then ( resultado => {
      this.cards=resultado;
    })  
    
    console.log(this.cards);
    
  }

  public addCard(name:string,img:string){
    this.img!.image_uris!.png!=img;
    this.card.name=name;
    this.card!.image_uris!.png!=this.img.image_uris?.png;
    this.cardService.addCardDeck(this.card)
   .then((response) => {
      if (response) {
        this.router.navigate(["/main"]);
      } else {
        console.log("error");
        };
      })
    }
  

}