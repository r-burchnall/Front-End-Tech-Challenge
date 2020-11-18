import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../../shared/models/TodoItem';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoItems: TodoItem[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
