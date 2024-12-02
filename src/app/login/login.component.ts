import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  // Corrected to styleUrls
})
export class LoginComponent {
  username = 'Abhishek';
  password = '';
  invalidPass = false;  // Changed to boolean
  errMsg = 'Invalid Credentials';

  //Router object
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router){
  }

  ngOnInit(){

  }

  handleLogin() {
    if (this.username === 'Abhishek' && this.password === 'Dummy') {
      //redirect to welcome page
      this.router.navigate(['welcome',this.username]);
      this.invalidPass = false;
    } else {
      this.invalidPass = true;
    }
  }
}
