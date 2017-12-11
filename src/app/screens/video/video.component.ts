import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  videoId: string
  video: any

  constructor(
    public activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public youtube: YoutubeService,
    public location: Location
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.videoId = params['id']
    })
  }

  ngOnInit() {
    this.youtube.getVideo(this.videoId)
    .subscribe(
      video => this.video = video.items[0],
      error => {})
  }

  videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video.id}?autoplay=1`)
  }

  goBack() {
    this.location.back()
  }
}
