import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SummarizedDetails } from 'src/app/shared/interfaces/summarized-details';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public videoDetailsList: SummarizedDetails[];

  @Output()
  public searchNextPage: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public seeMore(): void {
    this.searchNextPage.emit();
  }

}
