import {Component, OnInit, TemplateRef} from '@angular/core';
import {TodoItem} from '../../../shared/models/TodoItem';
import {TodoStoreState} from '../../../shared/models/TodoStoreState';
import {Store} from '@ngrx/store';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {update} from '../../../core/store/todo-list.actions';
import {TodoStoreAction} from '../../../shared/models/TodoStoreAction';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  newTodo = new TodoItem('');

  constructor(protected store: Store<TodoStoreState>,
              protected modalService: NgbModal) {
  }

  Open(content: TemplateRef<any>): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  CreateTodo(): void {
    this.store.dispatch(update({todoItem: this.newTodo, storeAction: TodoStoreAction.Create}));
    this.newTodo = new TodoItem('');
    this.modalService.dismissAll('Created item');
  }
}
