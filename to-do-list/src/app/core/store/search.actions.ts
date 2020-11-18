import {createAction, props} from '@ngrx/store';
import {TodoItem} from '../../shared/models/TodoItem';
import {TodoStoreAction} from '../../shared/models/TodoStoreAction';

export const set = createAction('[SEARCH] Set search term', props<{term: string}>());
export const clear = createAction('[SEARCH] Clear search term');
