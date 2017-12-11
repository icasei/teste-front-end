import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginatorIntl } from '@angular/material';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.sass']
})
export class SearchresultComponent implements OnInit {
  @Input() result
  @Output() page: EventEmitter<PageEvent>
  @Output() search = new EventEmitter()
  @ViewChild('paginator') paginator
  paginatorConfig: any
  
  constructor(
    public paginatorInt: MatPaginatorIntl,
    public youtube: YoutubeService
  ) {
    paginatorInt.itemsPerPageLabel = 'vídeos por página'
    paginatorInt.previousPageLabel = 'página anterior'
    paginatorInt.nextPageLabel = 'próxima página' 
  }

  ngOnInit() {
    this.paginatorConfig = {
      length: this.result.pageInfo.totalResults,
      pageSize: this.result.pageInfo.resultsPerPage,
      pageSizeOptions: [8, 10, 25, 50]
    }
  }

  ngOnChanges(changes) {
    changes.result.previousValue && (changes.result.currentValue.query !== changes.result.previousValue.query)
      ? this.paginatorConfig.pageSize = 8
      : null
  }

  changePage(page?: PageEvent) {
    if (page.pageSize !== this.paginatorConfig.pageSize) {
      this.youtube.search(this.result.query, page.pageSize).subscribe(
        data => {
          this.paginatorConfig.pageSize = page.pageSize          
          data.query = this.result.query
          this.search.emit(data)
        },
        error => {})
    }
  }

  nextPage() {
    console.log('sdsd')    
  }

}
