import { Component, OnInit } from '@angular/core';
import {BaseButton} from '../base-button';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent extends BaseButton  implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
