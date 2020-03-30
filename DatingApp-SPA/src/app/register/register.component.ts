import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() registerMode = false;

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful')
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
