import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../../shared/models/TodoItem';
import {ItemState} from '../../../shared/models/ItemState';
import {Observable} from 'rxjs';
import {TodoStoreState} from '../../../shared/models/TodoStoreState';
import {Store} from '@ngrx/store';
import {selectTodoItems} from '../../../core/store/store.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  search$: Observable<string>;
  todoItems$: Observable<TodoItem[]>;

  constructor(store: Store<TodoStoreState>) {
    console.log(store);
    this.todoItems$ = store.select(s => s.TodoList);
    this.search$ = store.select(s => s.SearchTerm);
  }
}
