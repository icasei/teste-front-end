import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchValue: ['', Validators.required]
    })
  }

  public clearSearchValue() {
    this.searchForm.controls.searchValue.setValue('');
  }

  onSubmit() {
    if (this.searchForm.valid) this.outputValue(this.searchForm.controls.searchValue.value);
  }

  public outputValue(value: string) {
    this.searchValue.emit(value);
  }

}
