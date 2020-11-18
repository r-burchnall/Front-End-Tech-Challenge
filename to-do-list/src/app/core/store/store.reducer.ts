import {createReducer, createSelector, on} from '@ngrx/store';
import {reset, update} from './todo-list.actions';
import {TodoStoreState} from '../../shared/models/TodoStoreState';
import {TodoStoreAction} from '../../shared/models/TodoStoreAction';
import {clear, set} from './search.actions';


export const initialState = new TodoStoreState();

const storeReducer = createReducer(
  initialState,
  on(update, (state: TodoStoreState, {todoItem, storeAction}) => {
    switch (storeAction) {
      case TodoStoreAction.Create:
        if (todoItem) {
          state.TodoList.push(todoItem);
        }
        return state;

      case TodoStoreAction.Delete:
        if (todoItem) {
          state.TodoList = state.TodoList.filter(i => i.Id != todoItem.Id);
        }
        return state;

      case TodoStoreAction.Update:
        if (todoItem) {
          state.TodoList = state.TodoList.filter(i => i.Id != todoItem.Id);
          state.TodoList.push(todoItem);
        }
        return state;

      default:
        throw Error('Unrecognised action in TodoStore');
    }
  }),
  on(reset, (state) => {
    return new TodoStoreState();
  }),
  on(set, (state, {term}) => {
    state.SearchTerm = term;
    return state;
  }),
  on(clear, (state) => {
    state.SearchTerm = '';
    return new TodoStoreState();
  })
);

// tslint:disable-next-line:typedef
export function StoreReducer(state, action) {
  return storeReducer(state, action);
}

export const selectFeature = (state: TodoStoreState) => state;

export const selectTodoItems = createSelector(
  selectFeature,
  (state: TodoStoreState) => state.TodoList.filter(i => i.Content.toLowerCase().includes(state.SearchTerm.toLowerCase()))
);