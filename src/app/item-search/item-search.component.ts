import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  items$!: Observable<Item[]>;
  private searchITerms = new Subject<string>();

  constructor(private itemService: ItemService) { }

  search(term: string): void {
    this.searchITerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchITerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }

}