import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../../../shared/models/TodoItem';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() TodoItems: TodoItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
