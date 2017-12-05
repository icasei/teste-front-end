import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';
import { YoutubeService } from './services/youtube.service';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
