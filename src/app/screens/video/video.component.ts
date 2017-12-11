import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  videoId: string

  constructor(
    public activatedRoute: ActivatedRoute,
    public youtube: YoutubeService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.videoId = params['id']
    })
  }

  ngOnInit() {
    this.youtube.getVideo(this.videoId)
    .subscribe(
      data => {
        console.log(data)
      },
      error => {})
  }

}
