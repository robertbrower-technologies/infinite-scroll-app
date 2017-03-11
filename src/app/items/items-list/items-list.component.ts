import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { ListItem } from '../../list-item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  selectedItem: ListItem;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.addItems();
    this.listService.selectedItem.subscribe(selectedItem => {
      this.selectedItem = selectedItem;
      console.log(`ItemsListComponent selectedItem=${this.selectedItem ? this.selectedItem.id : 'null'}`);
    });
  }

  onScrollDown() {
    this.addItems();
  }
  addItems() {
    this.listService.addItems()
      .catch(error => {
        // TODO
      });
  }
  onItemClicked(item: ListItem) {
    console.log(`ItemsListComponent::onItemClicked item=${item ? item.id : 'null'}`);
    this.listService.selectItem(item);
  }

}
