import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  formSearch: FormGroup;
  @Output() result = new EventEmitter()

  constructor(
    fb: FormBuilder
  ) {
    this.formSearch = fb.group({
      search: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  search() {
    this.result.emit('teste')
  }
}
