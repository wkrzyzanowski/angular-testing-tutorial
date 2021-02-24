import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ItemModel} from '../../../../models/item-model';

@Component({
  selector: 'app-item-tile-input',
  templateUrl: './item-tile-input.component.html',
  styleUrls: ['./item-tile-input.component.scss']
})
export class ItemTileInputComponent implements OnInit {

  public name = '';

  public price = 0.00;

  @Output()
  public itemEvent: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public add(): void {
    if (this.name.length !== 0 && this.price > 0.00) {
      this.itemEvent.emit(new ItemModel(undefined, this.name, this.price));
      this.name = '';
      this.price = 0.00;
    }
  }
}
