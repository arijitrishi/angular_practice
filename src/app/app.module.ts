import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesPersonListsComponent } from './sales-person-lists/sales-person-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
