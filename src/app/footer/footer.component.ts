import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Corrected property name
})
export class FooterComponent {
  constructor() {
    // console.log("Footer is working");
  }
}
