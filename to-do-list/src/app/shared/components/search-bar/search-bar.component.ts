import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TodoStoreState} from '../../models/TodoStoreState';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {set} from '../../../core/store/search.actions';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements AfterViewInit, OnDestroy {
  @Input() placeholder = 'Search...';
  searchTerm = '';
  searchObservable$: Observable<string>;
  private sub: Subscription;

  constructor(protected store: Store<{TodoStore: TodoStoreState}>) {
  }

  ConfirmSearch(): void {
    this.store.dispatch(set({term: this.searchTerm}));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.searchObservable$ = this.store.select(state => state.TodoStore.SearchTerm);
    this.sub = this.searchObservable$.subscribe((next) => {
      if (next) {
        this.searchTerm = next;
      }
    });
  }
}
