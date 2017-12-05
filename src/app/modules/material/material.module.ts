import { NgModule } from '@angular/core';
import { 
  MatInputModule,
  MatButtonModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class MaterialModule { }
