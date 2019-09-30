interface IThumbnailImage {
  url: string;
  width: number;
  height: number;
}

interface IThumbnail {
  maxres: IThumbnailImage;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ILocalized {
  title: string;
  description: string;
}

interface ISnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: IThumbnail;
  channelTitle: string;
  tags: string[];
  defaultAudioLanguage: string;
  localized: ILocalized;
  videoId: String;
}

export interface Details {
  snippet: ISnippet;
  statistics: IStatistics;
}
