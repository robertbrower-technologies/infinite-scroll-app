import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ListService } from '../../list.service';
import { ListItem } from '../../list-item';
import * as _ from 'lodash';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: ListItem;
  index: number;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.selectedItem.subscribe(selectedItem => {
      this.showItem(selectedItem);
    });
  }

  showItem(item: ListItem) {
    this.item = item;
    if (this.item) {
      this.index = _.findIndex(this.listService.list, (item) => 
      {
        return item.id == this.item.id;
      });
    }
    console.log(`ItemDetailsComponent::showItem item=${this.item ? this.item.id : 'null'}`);
  }

  prev() {
    if (this.index > 0) {
      this.index --;
      this.listService.selectItem(this.listService.list[this.index]);
    }
  }

  next() {
    if (this.index < this.listService.list.length - 1) {
      this.index ++;
      this.listService.selectItem(this.listService.list[this.index]);
    } else {
      this.listService.addItems();
    }
  }

  close() {
    this.listService.selectItem(null);
  }

}
