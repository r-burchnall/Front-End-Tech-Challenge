import { Component, OnInit } from '@angular/core';
import {BaseButton} from '../base-button';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent  extends BaseButton implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
