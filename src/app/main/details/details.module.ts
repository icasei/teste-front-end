import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from 'src/app/main/details/details.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [DetailsComponent],

  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})

export class DetailsModule { }