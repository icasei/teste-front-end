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

  ngOnChanges(changes) {
    changes.result.previousValue && (changes.result.currentValue.query !== changes.result.previousValue.query)
      ? this.paginatorInit()
      : null
  }

  ngOnInit() {
    this.paginatorInit()
  }

  paginatorInit() {
    this.paginatorConfig = {
      length: this.result.pageInfo.totalResults,
      pageSize: this.result.pageInfo.resultsPerPage,
      pageSizeOptions: [10, 25, 50],
      pageIndex: 0
    }
  }
  
  changePage(page?: PageEvent) {
    let pageToken
    if (page.pageIndex > this.paginatorConfig.pageIndex) {
      pageToken = this.result.nextPageToken
    } else if (page.pageIndex < this.paginatorConfig.pageIndex) {
      pageToken = this.result.prevPageToken
    } else {
      pageToken = ''
    }
    this.youtube.search(this.result.query, page.pageSize, pageToken).subscribe(
      data => {
        this.paginatorConfig.pageIndex = page.pageIndex
        this.paginatorConfig.pageSize = page.pageSize
        data.query = this.result.query
        this.search.emit(data)
      },
      error => {})
  }
}
