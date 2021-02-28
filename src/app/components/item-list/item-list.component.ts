import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../../models/item-model';
import {ItemService} from '../../services/item.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public items: ItemModel[] = [];

  constructor(private readonly itemService: ItemService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  public addItem($event: ItemModel): void {
    this.itemService.create($event)
      .pipe(take(1))
      .subscribe(resp => {
          console.log('Item added:' + resp.id);
          this.fetchItems();
        },
        error => {
          console.error('Cannot add item: ' + error);
        });
  }

  public deleteItem($event: ItemModel): void {
    this.itemService.delete($event)
      .pipe(take(1))
      .subscribe(resp => {
          console.log('Item deleted successfully');
          this.fetchItems();
        },
        error => {
          console.error('Cannot delete item: ' + error);
        });
  }

  private fetchItems(): void {
    this.itemService.getItems()
      .pipe(take(1))
      .subscribe(resp => {
          this.items = resp;
        },
        error => {
          console.error(error);
        });
  }
}
