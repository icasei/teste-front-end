import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  loaded: Boolean = false
  searchDone: Boolean = false
  resultList
  currentUrl
  
  constructor(
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // open load
        this.loaded = false;
      } else if (event instanceof NavigationEnd) {
        this.currentUrl = event.url
        // close load
        setTimeout (() => {
          this.loaded = true;
        }, 500);
      }
    })
  }

  searchResult(result) {
    this.searchDone = true
    this.resultList = result
  }
}
