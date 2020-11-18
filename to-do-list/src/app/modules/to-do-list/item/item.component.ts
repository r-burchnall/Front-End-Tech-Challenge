import {Component, Input, OnInit} from '@angular/core';
import {ItemState} from 'src/app/shared/models/ItemState';
import {TodoItem} from '../../../shared/models/TodoItem';
import {update} from '../../../core/store/todo-list.actions';
import {TodoStoreAction} from '../../../shared/models/TodoStoreAction';
import {Store} from '@ngrx/store';
import {TodoStoreState} from '../../../shared/models/TodoStoreState';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() Item: TodoItem;

  ItemState = ItemState;
  constructor(protected store: Store<{TodoStore: TodoStoreState}>) { }

  ngOnInit(): void {
  }

  AttemptToComplete(): void {

  }

  UpdateItem(): void {
    this.store.dispatch(update({storeAction: TodoStoreAction.Update, todoItem: this.Item}));
  }

  DeleteItem(): void {
    this.store.dispatch(update({storeAction: TodoStoreAction.Delete, todoItem: this.Item}));
  }
}
