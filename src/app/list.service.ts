import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListItem } from './list-item';

@Injectable()
export class ListService {
  fetch: number = 100;
  start: number = 0;
  end: number = this.fetch;
  
  public list: Array<ListItem> = [];
  public selectedItem: BehaviorSubject<ListItem>;
  public endOfList: boolean;

  constructor() {
    this.selectedItem = new BehaviorSubject<ListItem>(null);
  }

  public addItems() : Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.start < 200) {
        console.log(`ListService::addItems ${this.start} - ${this.end}`);
        for (let i=this.start; i<this.end; i++) {
          this.list.push(new ListItem(i));
        }
        this.start = this.end;
        this.end = this.end + this.fetch;
      } else {
        this.endOfList = true;
      }
      
      resolve();
    });
  }

  public selectItem(item: ListItem) {
    console.log(`ListService::selectItem item=${item ? item.id : 'null'}`);
    this.selectedItem.next(item);
  }

}
