import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/Models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  @Output() public onNewUser: EventEmitter<User> = new EventEmitter();

  public user: User = new User({id:null})

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public userForm: FormGroup = this.fb.group({
    username:new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {

    this.user.userName = this.userForm.value.username;
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
    this.emitCharacter();
  }

  public emitCharacter() {

    this.onNewUser.emit(this.user);

  }


}
