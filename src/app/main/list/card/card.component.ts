import { Component, Input } from '@angular/core';
import { SummarizedDetails } from 'src/app/shared/interfaces/summarized-details';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public videoSummarizedDetails: SummarizedDetails;

  constructor() { }

}