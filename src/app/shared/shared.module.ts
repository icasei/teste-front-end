import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from 'src/app/shared/youtube/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [ErrorComponent, LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    YoutubeService
  ],
  exports: [
    ErrorComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
