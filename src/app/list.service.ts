import { Injectable } from '@angular/core';
import { ListItem } from './list-item';

@Injectable()
export class ListService {
  public getItems(start: number, end: number) : Promise<Array<ListItem>> {
    return new Promise((resolve, reject) => {
      let result = [];
      for (let i=start; i<end; i++) {
        result.push(new ListItem(i));
      }
      resolve(result);
    });
  }
}
