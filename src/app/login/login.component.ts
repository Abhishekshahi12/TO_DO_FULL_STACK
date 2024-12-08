import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit(){

  }

  handleLogin() {
    // if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    //   //redirect to welcome page
      // this.router.navigate(['welcome', this.username]);
      // this.invalidPass = false;
    // } else {
    //   this.invalidPass = true;
    // }

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidPass = false;
    }else{
      this.invalidPass=true;
    }
  }
}
