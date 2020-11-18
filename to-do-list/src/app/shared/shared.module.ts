import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {PrimaryButtonComponent} from './components/primary-button/primary-button.component';
import {SecondaryButtonComponent} from './components/secondary-button/secondary-button.component';
import {DeleteButtonComponent} from './components/delete-button/delete-button.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DeleteButtonComponent
  ],
  exports: [
    SearchBarComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
