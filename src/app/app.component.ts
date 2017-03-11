import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { ListItem } from './list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Array<ListItem> = [];
  fetch: number = 100;
  start: number = 0;
  end: number = this.fetch;
  constructor(private listService: ListService) { }
  ngOnInit() {
    this.addItems();
  }
  onScrollDown() {
    this.addItems();
  }
  addItems() {
    console.log(`Getting ${this.start} - ${this.end}`);
    this.listService.getItems(this.start, this.end)
      .then(items => {
        this.list = this.list.concat(items);
        this.start = this.end;
        this.end += this.fetch; 
      });
  }
  onListItemClicked(event: any) {
    debugger;
  }
}
