import * as uuid from 'uuid-random';
import {ItemState} from './ItemState';

export class TodoItem {
  Id: string;
  Content: string;
  DueDate?: Date;
  CreatedAt: Date;
  ModifiedAt?: Date;
  State: ItemState;
  Archived: boolean;

  constructor(content: string,
              dueDate: Date = null,
              createdAt: Date = new Date(),
              modifiedAt: Date = new Date(),
              state: ItemState = ItemState.Open,
              archived: boolean = false) {
    this.Id = uuid();
    this.Content = content;
    this.DueDate = dueDate;
    this.CreatedAt = createdAt;
    this.ModifiedAt = modifiedAt;
    this.State = state;
    this.Archived = archived;
  }
}
