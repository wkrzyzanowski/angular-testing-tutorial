import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../../models/item-model';
import {ItemService} from '../../services/item.service';

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

  private fetchItems(): void {
    this.itemService.getItems().subscribe(resp => {
        this.items = resp;
      },
      error => {
        console.log(error);
      });
  }

  public addItem($event: ItemModel): void {
    this.itemService.create($event).subscribe(resp => {
        console.log('Item added:' + resp.id);
      },
      error => {
        console.error('Cannot add item: ' + error);
      });
  }

  public deleteItem($event: ItemModel): void {
    this.itemService.delete($event).subscribe(resp => {
        console.log('Item deleted successfully');
      },
      error => {
        console.error('Cannot delete item: ' + error);
      });
  }
}
