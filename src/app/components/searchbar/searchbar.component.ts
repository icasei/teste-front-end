import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  formSearch: FormGroup;
  @Output() result = new EventEmitter()

  constructor(
    fb: FormBuilder,
    public youtube: YoutubeService
  ) {
    this.formSearch = fb.group({
      search: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  search() {
    this.youtube.search(this.formSearch.controls.search.value)
    .subscribe(
      data => this.result.emit(data),
      error => {})
  }
}
