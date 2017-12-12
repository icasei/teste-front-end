import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  @Output() result = new EventEmitter()
  formSearch: FormGroup;
  submitted: Boolean  

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
    const query = this.formSearch.controls.search.value
    this.submitted = true
    if (this.formSearch.valid) {
      this.youtube.search(query)
      .subscribe(
        data => {
          data.query = query
          this.result.emit(data)
        },
        error => {})
    }
  }
}
