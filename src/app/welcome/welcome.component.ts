import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title = 'to-do-project';
  welcome='It is under app.component.ts';
  name='';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.name=this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot);
  }
  
}
