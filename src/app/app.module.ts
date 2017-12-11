import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRouting } from './app.routing';
import { YoutubeService } from './services/youtube.service';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { VideoComponent } from './screens/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    SearchresultComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [
    YoutubeService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
