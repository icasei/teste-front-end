import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  public mainErrorMessage: string;

  @Input()
  public secondaryErrorMessage: string;

  constructor() { }

}
