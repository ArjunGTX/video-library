import { CategoryType } from "./category";

export interface Video {
  _id: string;
  title: string;
  description: string;
  creator: string;
  creatorImage: string;
  thumbnail: string;
  category: CategoryType;
  createdAt: number;
}

export interface Playlist {
  _id: string;
  title: string;
  videos: Video[];
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

export interface ListPlaylistResponse {
  playlists: Playlist[];
}

export interface GetPlaylistInfoResponse {
  playlist: Playlist;
}

export interface CreatePlaylistResponse {
  playlists: Playlist[];
}

export interface DeletePlaylistResponse {
  playlists: Playlist[];
}

export interface AddToPlaylistResponse {
  playlists: Playlist[];
}

export interface RemoveFromPlaylistResponse {
  playlists: Playlist[];
}
