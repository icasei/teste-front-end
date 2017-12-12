import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        HttpModule,
        Http,
        ConnectionBackend
      ]
    });
  });

  it('should be created', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
