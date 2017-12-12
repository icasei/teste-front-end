import { TestBed, async } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatIcon, MatError, MatFormField, MatPaginator, MatCardTitle, MatCardContent, MatCardActions, MatCardSubtitle, MatCard, MatSelect, MatOption, MatTooltip } from '@angular/material';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchbarComponent,
        SearchresultComponent,
        MatToolbar,
        MatIcon,
        MatError,
        MatPaginator,
        MatCard,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        MatCardActions,
        MatFormField,
        MatSelect,
        MatOption,
        MatTooltip,
        CdkOverlayOrigin,
        RouterOutlet,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
