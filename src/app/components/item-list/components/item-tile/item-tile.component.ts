import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from '../../../../models/item-model';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent implements OnInit {

  @Input() item: ItemModel = ItemModel.getDummyItem();
  @Output() deleteItemEvent: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor() {

  }

  ngOnInit(): void {
  }

  public deleteItem(): void {
    this.deleteItemEvent.emit(this.item);
  }
}
