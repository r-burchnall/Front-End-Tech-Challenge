import {Component, Input, OnInit} from '@angular/core';
import { ItemState } from 'src/app/shared/models/ItemState';
import {TodoItem} from '../../../shared/models/TodoItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() Item: TodoItem;

  ItemState = ItemState;
  constructor() { }

  ngOnInit(): void {
  }

  AttemptToComplete(): void {

  }
}
