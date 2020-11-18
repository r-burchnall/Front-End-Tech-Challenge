import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  providers: [
    ReactiveFormsModule
  ],
  declarations: [ItemListComponent, ItemComponent, TodoPageComponent, CreateTodoComponent],
  exports: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ToDoListModule { }
