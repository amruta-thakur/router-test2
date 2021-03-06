import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollectableService } from './shared/collectable.service';

import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    MarketComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
