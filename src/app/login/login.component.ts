import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  handleLogin() {
    if (this.username === 'Abhishek' && this.password === 'Dummy') {
      this.invalidPass = false;
    } else {
      this.invalidPass = true;
    }
  }
}
