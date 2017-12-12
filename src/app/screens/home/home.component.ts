import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public title: Title) {
    this.title.setTitle(`Faça sua busca - ${environment.app.title}`)
  }

  ngOnInit() {
  }

}
