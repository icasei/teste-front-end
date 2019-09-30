import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  @Input()
  public strokeWidth = 3;

  @Input()
  public diameter = 50;

  constructor() { }

}
