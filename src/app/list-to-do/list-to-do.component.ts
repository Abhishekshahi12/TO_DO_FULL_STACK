import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

export class toDo{

  constructor(public id: number, public desc: String, public targetDate: Date, public status: boolean) {}
}

@Component({
  selector: 'app-list-to-do',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent {
  toDos =[
    new toDo(1,"learn to dance",new Date(), false),
    new toDo(1,"learn to swim",new Date(), false),
    new toDo(1,"learn to code",new Date(), false)
  ]

}
