import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, LoginComponent,MenuComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Corrected to styleUrls
})
export class AppComponent {
  title = 'to-do-project';
  welcome = 'It is under app.component.ts';
}
