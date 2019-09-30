import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { MainComponent } from 'src/app/main/main.component';
import { SearchComponent } from 'src/app/main/search/search.component';
import { ListComponent } from 'src/app/main/list/list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from 'src/app/main/list/card/card.component';
import { CacheService } from 'src/app/shared/services/cache.service';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    ListComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],

  providers: [
    CacheService
  ]
})

export class MainModule { }
