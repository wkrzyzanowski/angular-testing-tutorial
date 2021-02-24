import {Injectable} from '@angular/core';
import {ItemModel} from '../models/item-model';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';

import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: ItemModel[] = [];

  private mockedItems: ItemModel[] = [
    new ItemModel(uuid(), 'Suszarka', 129.99),
    new ItemModel(uuid(), 'Odkurzacz', 239.99),
    new ItemModel(uuid(), 'Kabel USB', 19.99),
    new ItemModel(uuid(), 'Monitor 27\'', 1479.99),
    new ItemModel(uuid(), 'Pralka', 919.99),
  ];

  constructor() {
  }

  public getItems(): Observable<ItemModel[]> {
    return of(this.mockedItems);
  }

  public getItemById(id: string): Observable<ItemModel | undefined> {
    const response = this.mockedItems.find(item => item.id === id);
    if (!response) {
      throw new Error('Not found item with id: ' + id);
    }
    return of(response);
  }

  public create(newItem: ItemModel): Observable<ItemModel> {
    const response = this.mockedItems.find(item => item.id === newItem.id);
    if (response) {
      throw new Error('Item with id: ' + newItem.id + ' already exists!');
    }
    newItem.id = uuid();
    this.mockedItems.push(newItem);
    return of(newItem);
  }

  public delete(deleteItem: ItemModel): Observable<boolean> {
    const response = this.mockedItems.findIndex(item => item.id === deleteItem.id);
    if ((!response && response !== 0) || response === -1) {
      throw new Error('Not found item with id: ' + deleteItem.id);
    } else {
      this.mockedItems.splice(response, 1);
    }
    return of(true);
  }


}
