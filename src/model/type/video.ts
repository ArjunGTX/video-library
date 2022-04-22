import { CategoryType } from "./category";

export interface Video {
  _id: string;
  title: string;
  description: string;
  creator: string;
  creatorImage: string;
  thumbnail: string;
  category: CategoryType;
}

export interface ListVideoResponse {
  videos: Video[];
}

export interface GetVideoInfoResponse {
  video: Video;
}

export interface ListLikeResponse {
  likes: Video[];
}

export interface AddLikeResponse {
  likes: Video[];
}

export interface DeleteLikeResponse {
  likes: Video[];
}

export interface ListWatchLaterResponse {
  watchlater: Video[];
}

export interface DeleteWatchLaterResponse {
  watchlater: Video[];
}

export interface AddWatchLaterResponse {
  watchlater: Video[];
}

export interface ListHistoryResponse {
  history: Video[];
}

export interface AddHistoryResponse {
  history: Video[];
}

export interface DeleteHistoryResponse {
  history: Video[];
}

export interface ClearHistoryResponse {
  history: Video[];
}
