import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  @Input() emailAddress: string = 'Email';
  @Input() password: string = 'Password';

  @Output() _onClickLogin = new EventEmitter<void>
}

