import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../../shared/models/TodoItem';
import {ItemState} from '../../../shared/models/ItemState';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  todoItems: TodoItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.todoItems = [
      new TodoItem('Item 1', null, new Date(), null, ItemState.Open),
      new TodoItem('Item 2', null, new Date(), null, ItemState.Open),
      new TodoItem('Item 3', null, new Date(), null, ItemState.Open),
    ];
  }

}
