import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cards } from 'src/app/core/Models';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {

  @Output() public onNewTask: EventEmitter<Cards> = new EventEmitter();

  public task: Cards = new Cards({ id: null });

  public taskForm: FormGroup = this.fb.group({
    priority: new FormControl(0, [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {

  }

  public emitCharacter() {

    this.onNewTask.emit(this.task);

  }

}