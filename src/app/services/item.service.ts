import {Injectable} from '@angular/core';
import {ItemModel} from '../models/item-model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private static readonly URL_API = '/api';

  public items: ItemModel[] = [];

  constructor(private readonly api: HttpClient) {
  }

  public getItems(): Observable<ItemModel[]> {
    return this.api.get<ItemModel[]>(`${ItemService.URL_API}/products`);
  }

  public getItemById(id: string): Observable<ItemModel | undefined> {
    return this.api.get<ItemModel>(`${ItemService.URL_API}/products/${id}`);
  }

  public create(newItem: ItemModel): Observable<ItemModel> {
    return this.api.post<ItemModel>(`${ItemService.URL_API}/products`, {
      id: uuid(),
      name: newItem.name,
      price: newItem.price
    });
  }

  public delete(deleteItem: ItemModel): Observable<boolean> {
    return this.api.delete<boolean>(`${ItemService.URL_API}/products/${deleteItem.id}`);
  }


}
