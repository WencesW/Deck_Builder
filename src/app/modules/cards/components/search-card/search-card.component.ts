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

  @Output() public onNewTask: EventEmitter<Cards> = new EventEmitter();

  public task: Cards = new Cards({ id: null });

  public searchForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private cardService:CardsService) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    let carta = this.cardService.obtenerCarta(this.searchForm.value.name)
    console.log(carta);
    
  }

}