import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { DetailsComponent } from './main/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    DetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
