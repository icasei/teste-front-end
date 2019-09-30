import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Request } from '../interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private static urlControl = 'youtube_api';
  private static youtubeApiKey = 'AIzaSyBPrd8AEFidfN9V856He7mMEv5b3F5tT74';

  constructor(private http: HttpClient) { }

  public getAll<T>(path: string, options: Request): Observable<T> {
    return this.getUrls().pipe(
      mergeMap(
        urls => {
          let url = urls[`${YoutubeService.urlControl}`] + path
          this.handleKeyParam(options);
          return this.http.get<T>(url, options);
        }
      )
    );
  }

  public get<T>(path: string, options: Request): Observable<T> {
    return this.getUrls().pipe(
      mergeMap(
        urls => {
          let url = urls[`${YoutubeService.urlControl}`] + path
          this.handleKeyParam(options);
          return this.http.get<T>(url, options);
        }
      )
    );
  }

  private getUrls(): Observable<object> {
    return this.http.get('assets/json/url_config.json');
  }

  private handleKeyParam(options: Request) {
    options.params['key'] = YoutubeService.youtubeApiKey;
  }
}
