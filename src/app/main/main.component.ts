import { CacheService } from 'src/app/shared/services/cache.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/shared/youtube/youtube.service';
import { SummarizedDetails } from 'src/app/shared/interfaces/summarized-details';
import { SummarizedDetailsLoad } from 'src/app/shared/interfaces/summarized-details-load';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public barOnTop = false;
  public videoDetailsList: SummarizedDetails[];
  public termToSearch: string;
  public loading: boolean = false;

  private bookmark: string;
  private youtubeSubscription: Subscription;

  constructor(
    private youtube: YoutubeService,
    private youtubeCache: CacheService
  ) { }

  ngOnInit() {
    const videoDetailsCache = this.youtubeCache.cache;
    if (videoDetailsCache) {
      this.videoDetailsList = videoDetailsCache.items;
      this.bookmark = videoDetailsCache.nextPageToken;
      this.termToSearch = videoDetailsCache.termToSearch;
      this.barOnTop = true
    }
  }

  ngOnDestroy() {
    if(this.youtubeSubscription) this.youtubeSubscription.unsubscribe();
  }

  public getJustifyContent(): string {
    let justify = 'center';

    if (this.barOnTop) {
      if (!this.loading) {
        if (!this.videoDetailsList || !this.videoDetailsList.length) {
          justify = 'center';
        } else {
          justify = 'flex-end';
        }
      }
    } else {
      justify = 'flex-start';
    }

    return justify;
  }

  public searchVideos(termToSearch: string): void {
    this.barOnTop = true;
    this.loading = true;
    if (this.termToSearch !== termToSearch) {
      this.handleNewRequest(termToSearch);
    }
    this.youtubeSubscription = this.youtube.getAll<SummarizedDetailsLoad>('/search', this.createRequestOptions())
      .subscribe(
        videoList => {
          this.handleNewVideoList(videoList);
        },
        error => {
          console.error(error)
          this.loading = false;
        }
      );
  }

  private handleNewRequest(termToSearch: string) {
    this.termToSearch = termToSearch;
    this.videoDetailsList = undefined;
    this.bookmark = undefined;
    this.youtubeCache.clearCache();
  }

  private handleNewVideoList(videoList: SummarizedDetailsLoad) {
    this.addVideosToList(videoList.items);
    this.bookmark = videoList.nextPageToken;
    this.loading = false;
    this.setCache();
  }

  private setCache() {
    this.youtubeCache.cache = {
      nextPageToken: this.bookmark,
      items: this.videoDetailsList,
      termToSearch: this.termToSearch
    }
  }

  private addVideosToList(videos: SummarizedDetails[]): void {
    if (this.videoDetailsList) videos.map(video => this.videoDetailsList.push(video));
    else this.videoDetailsList = videos;
  }

  private createRequestOptions() {
    const options = {
      params: {
        part: 'id,snippet',
        q: this.termToSearch,
        maxResults: '7'
      }
    }
    if (this.bookmark) options.params['pageToken'] = this.bookmark;
    return options;
  }
}