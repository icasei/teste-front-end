import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.sass']
})
export class SearchresultComponent implements OnInit {
  @Input() result

  constructor() { }

  ngOnInit() {
    
  }

}
