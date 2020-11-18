import {TodoItem} from './TodoItem';
import {ItemState} from './ItemState';

export class TodoStoreState {
  TodoList: TodoItem[] = [
    new TodoItem('Item 1', null, new Date(), null, ItemState.Open),
    new TodoItem('Item 2', null, new Date(), null, ItemState.Done),
    new TodoItem('Item 3', null, new Date(), null, ItemState.Open, true),
  ];
  SearchTerm = 'Default Search Value';
}
