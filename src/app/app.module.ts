import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemTileComponent} from './components/item-list/components/item-tile/item-tile.component';
import {ItemService} from './services/item.service';
import {ItemTileInputComponent} from './components/item-list/components/item-tile-input/item-tile-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemTileComponent,
    ItemTileInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
