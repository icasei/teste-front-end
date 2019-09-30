interface IId {
  videoId: string;
}

interface IThumbnailsImage {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IThumbnailsImage;
  high: IThumbnailsImage;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
}

export interface SummarizedDetails {
  id: IId;
  snippet: ISnippet;
}
