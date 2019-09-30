import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from 'src/app/shared/youtube/youtube.service';
import { ActivatedRoute } from '@angular/router';
// import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

import { DetailsLoad } from '../details/interface/details-load';
import { Details } from '../details/interface/details';
import { Request } from 'src/app/shared/interfaces/request';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit, OnDestroy {

  public error = false;
  public loading = false;
  public videoDetails: Details;
  private activeRouteSub: Subscription;
  private youtubeSub: Subscription;

  constructor(
    private activRoute: ActivatedRoute,
    private youtube: YoutubeService
  ) { }

  ngOnInit() {
    this.activeRouteSub = this.activRoute.params.subscribe(
      (params: { videoId: string }) => this.getVideoDetails(params.videoId)
    );
  }

  ngOnDestroy() {
    this.activeRouteSub.unsubscribe();
    this.youtubeSub.unsubscribe();
  }

  public getVideoDetails(videoId: string): void {
    this.loading = true;
    this.youtubeSub = this.youtube.get('/videos', this.createRequestOptions(videoId)).subscribe(
      (videoDetails: DetailsLoad) => {
        this.videoDetails = videoDetails.items[0]
        this.loading = false;
      },
      (error) => {
        console.error(error)
        this.error = true;
        this.loading = false;
      }
    )
  }

  private createRequestOptions(videoId: string): Request {
    return {
      params: {
        part: 'snippet, statistics',
        id: videoId,
      }
    }
  }
}