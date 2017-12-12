import { NgModule } from '@angular/core';
import { 
  PageEvent,
  MatInputModule,
  MatButtonModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatCardModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    PageEvent
  ]
})
export class MaterialModule { }
