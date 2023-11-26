import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cards } from 'src/app/core/Models';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {
  public cards: Cards = new Cards({ id: null });
  card: any;
  public searchForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
  });
  

  constructor(private fb: FormBuilder, private cardService:CardsService) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.card = this.cardService.obtenerCarta(this.searchForm.value.name)
  }

}