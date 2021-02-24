import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTileInputComponent } from './item-tile-input.component';

describe('ItemTileInputComponent', () => {
  let component: ItemTileInputComponent;
  let fixture: ComponentFixture<ItemTileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
