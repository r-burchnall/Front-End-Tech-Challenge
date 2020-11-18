import {ItemState} from './ItemState';

export class TodoItem {
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  State: ItemState;
  Archived: boolean;
}
