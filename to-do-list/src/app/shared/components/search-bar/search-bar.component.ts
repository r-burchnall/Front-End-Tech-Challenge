import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder = 'Search...';

  constructor() { }

  ngOnInit(): void {
  }

  ConfirmSearch(): void {
  }
}
