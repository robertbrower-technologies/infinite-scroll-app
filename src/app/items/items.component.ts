import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  selectedItem: ListItem;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.selectedItem.subscribe(selectedItem => {
      this.selectedItem = selectedItem;
      console.log(`ItemsComponent selectedItem=${this.selectedItem ? this.selectedItem.id : 'null'}`);
    });
  }

}
