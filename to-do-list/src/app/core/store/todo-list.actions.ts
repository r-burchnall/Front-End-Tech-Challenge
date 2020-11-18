import {createAction, props} from '@ngrx/store';
import {TodoItem} from '../../shared/models/TodoItem';
import {TodoStoreAction} from '../../shared/models/TodoStoreAction';

export const update = createAction('[TODO LIST] Update Todo', props<UpdateTodo>());
export const reset = createAction('[TODO LIST] Reset');

interface UpdateTodo {
  todoItem: TodoItem;
  storeAction: TodoStoreAction;
}
