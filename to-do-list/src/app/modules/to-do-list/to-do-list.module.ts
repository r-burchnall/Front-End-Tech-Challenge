import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import {SharedModule} from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [
    ReactiveFormsModule
  ],
  declarations: [ItemListComponent, ItemComponent, TodoPageComponent],
  exports: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToDoListModule { }
