import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class YoutubeService {

  constructor(public http: Http) {}

  search(query: string, pageSize: number = 10, pageToken: string = '') {
    return this.http.get(`${environment.API.youtube.host}search?part=id,snippet&q=${query}&key=${environment.API.youtube.key}&maxResults=${pageSize}&pageToken=${pageToken}`)
      .map(res => res.json())
  }

  getVideo(id: string) {
    return this.http.get(`${environment.API.youtube.host}videos?id=${id}&part=snippet,statistics&key=${environment.API.youtube.key}`)
      .map(res => res.json())
  }
}
