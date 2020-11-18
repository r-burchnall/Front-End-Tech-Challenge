import { Component, OnInit } from '@angular/core';
import {BaseButton} from '../base-button';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent extends BaseButton implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
