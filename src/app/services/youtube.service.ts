import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  basePath: string
  apiKey: string

  constructor(public http: Http) {
    this.basePath = 'https://www.googleapis.com/youtube/v3/'
    this.apiKey = 'AIzaSyDU7GXqdPIodmqsJYeNtNS5DmJzVuXDF2Y'
  }

  search(query: string, pageSize: number = 8) {
    return this.http.get(`${this.basePath}search?part=id,snippet&q=${query}&key=${this.apiKey}&maxResults=${pageSize}`)
      .map(res => res.json())
  }
}
